import { FlexCardMixin } from "vlocity_cmt/flexCardMixin";
    import {interpolateWithRegex, interpolateKeyValue, fetchCustomLabels, loadCssFromStaticResource } from "vlocity_cmt/flexCardUtility";
    
          import { LightningElement, api, track, wire } from "lwc";
          
          import pubsub from "vlocity_cmt/pubsub";
          import { getRecord } from "lightning/uiRecordApi";
          
          import data from "./definition";
          
          import styleDef from "./styleDefinition";
              
          export default class cfCpqPromotionTileListView extends FlexCardMixin(LightningElement){
              @api debug;
              @api recordId;
              @api objectApiName;
              
              @track record;
              @track _sessionApiVars = {};

              _regexPattern = /\{([a-zA-Z.0-9_]+)\}/g; //for {} fields by default
              @track Label={CPQSeeDetailsLabel:"See Details",
      CPQOfferStartsLabel:"Offer Starts",
      CPQStartDateOfPromotionPlaceholder:"Start Date of Promotion",
      CPQOfferEndsLabel:"Offer Ends",
      CPQEndDateOfPromotionPlaceholder:"End Date of Promotion",
      AddToCart:"Add to Cart",
      CPQDescriptionOfPromotionPlaceholder:"A Short Description of Promotion",
      CPQNameOfPromotionPlaceholder:"Name of Promotion",
      CPQPromotion:"Promotion",
      CPQPromotionsNotAvailable:"No promotions available.",
      CPQEmptyInvalidCartId:"Cart Id is Empty/Invalid.",
      CPQError:"Error"
      };
              pubsubEvent = [];
              customEvent = [];
              
              connectedCallback() {
                super.connectedCallback();
                this.setStyleDefinition(styleDef);
                data.Session = {} //reinitialize on reload
                
                this.flexiPageWidthAwareCB = this.flexiPageWidthAware.bind(this);
                  window.addEventListener('resize', this.flexiPageWidthAwareCB);
                this.customLabels = this.Label;
                      
                        fetchCustomLabels(Object.keys(this.Label)).then(labels => {
                          this.Label = labels;
                          let card = {...this.card};
                          card.Label = labels;
                          this.card = card;
                          this.customLabels = this.Label;
                      });
                this.setDefinition(data);
 this.registerEvents();
                
                
              }
              
              disconnectedCallback(){
                super.disconnectedCallback();
                    
                    window.removeEventListener('resize', this.flexiPageWidthAwareCB);

                  this.unregisterEvents();
              }

              performAction(event) {
                const dataset = event.currentTarget.dataset;
                let stateIndex = "0";
                let recordIndex;
                if(event.currentTarget && event.currentTarget.closest(".cf-vlocity-state")){
                  stateIndex = event.currentTarget.closest(".cf-vlocity-state").dataset.index;
                  //This will be undefined in case of repeat record is off
                  recordIndex = event.currentTarget.closest(".cf-vlocity-state").dataset.rindex;
                }
                let stateSelector = ".cf-vlocity-state[data-index='"+ stateIndex + "']";
                if(recordIndex){
                  stateSelector += "[data-rindex='"+ recordIndex + "']"
                }
                const flexActionSelector = stateSelector + " ." + dataset.actionElementClass;
                this.elementIndex = recordIndex;
                let actionList = event?.target?.actionList;
                if(actionList?.length){
                  const eventObj = {
                    actionList : actionList,
                    eventSource : 'EventFlexAction',
                    actionElementClass : flexActionSelector,
                    elementLabel : dataset.elementLabel,
                    target : event.target,
                    showSpinner : dataset.showSpinner
                  }
                  this.fireMultipleActionRecursively(eventObj, 0, null, null, null, this.elementIndex, data);
                }
              }
              
              executeActionWithKeyboard(event) {
                event.keyCode != 13  || this.executeAction(event);
              }

              executeAction(event) {
                const dataset = event.currentTarget.dataset;
                if (dataset && dataset.onchange === 'setValue' ) {
                  this.setValueOnToggle(event);
                }
                if(dataset && typeof dataset.elementLabel !== 'undefined') {
                  this.elementIndex = event.currentTarget && event.currentTarget.closest(".cf-vlocity-state") ? event.currentTarget.closest(".cf-vlocity-state").dataset.rindex : -1;
                  let action = event.currentTarget.action;
                  if(typeof action === 'string'){
                    action = JSON.parse(action);
                  }
                  action.actionList = action.actionList || (action.actionData ? [action.actionData] : []);
                  if(action.actionList && action.actionList.length > 0){
                    const eventObj = {
                      actionList : action.actionList,
                      eventSource : 'EventTrigger',
                      actionElementClass : '.execute-action',
                      elementLabel : dataset.elementLabel,
                      target : event.target,
                      showSpinner : action.showSpinner,
                    }
                    this.fireMultipleActionRecursively(eventObj, 0, null, null, null, this.elementIndex, data);
                  }
                }
                event.stopPropagation();
              }

              registerEvents() {
                
              }

              unregisterEvents(){
                
              }
            
              renderedCallback() {
                super.renderedCallback();
                
                if(!this.containerWidthInitialised) {
                  this.containerWidthInitialised = true;
                  this.flexiPageWidthAware();
                }
              }

              handleEventAction(eventObj, eventIndex, event) {
                eventObj.actionList = eventObj.actionList || (eventObj.actionData ? [eventObj.actionData] : []);
                eventObj.eventSource = 'EventListener';
                eventObj.actionElementClass = '.action-trigger';
                let recordIndex;
                if (eventObj.eventtype === 'event' && event?.target){
                  if(this.elementIndex >=0 && event?.target?.classList.contains("execute-action")) {
                    recordIndex = this.elementIndex;
                  } else {
                    const stateElement = event.target.closest(".cf-vlocity-state")
                     ? event.target.closest(".cf-vlocity-state")
                     : null;
                    if (stateElement?.dataset.rindex) {
                    recordIndex = parseInt(stateElement.dataset.rindex, 10);
                    }
                  }
                }
                if(eventObj.actionList && eventObj.actionList.length > 0){
                  this.fireMultipleActionRecursively(eventObj, 0, null, eventIndex, event, recordIndex, data);
                }
              }
          }
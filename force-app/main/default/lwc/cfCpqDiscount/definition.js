let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\"isQualifiedTabSelected\":true}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1627060314667-ol8xay9ij","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"isQualifiedTabSelected","fieldValue":"{action.showQualified}"}],"id":"flex-action-1627060694979","type":"cardAction"}}],"channelname":"cpq","displayLabel":"cpq:cpq_qualified","element":"action","eventLabel":"pubsub","eventname":"cpq_qualified","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqDiscount_4_Vlocity","Id":"0Rb8a000000DqzCCA0","ManageableState":"unmanaged","MasterLabel":"cfCpqDiscount_4_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"sessionVars":[],"states":[{"actions":[],"childCards":["cpqAppliedDiscounts","cpqDiscountList","cpqCreateCustomDiscountModal"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3EApply%20Discount%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discount-title","container":{"class":""},"customClass":"cpq-discount-title","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discount-title","container":{"class":""},"customClass":"cpq-discount-title","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"},{"children":[{"children":[{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-2-Block-0-Action-0","key":"element_element_element_element_block_1_0_block_0_0_block_0_0_action_0_0","name":"Action","parentElementKey":"element_element_element_block_1_0_block_0_0_block_0_0","property":{"card":"{card}","record":"{record}","stateAction":{"displayName":"{Label.CPQAppliedDiscounts}","eventName":"reload","id":"flex-action-1627368965245","openUrlIn":"Current Window","subType":"Custom","type":"cardAction","vlocityIcon":"utility:moneybag"},"stateObj":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 "},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-0","key":"element_element_element_block_1_0_block_0_0_block_0_0","name":"Block","parentElementKey":"element_element_block_1_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"border-bottom: solid 1px #DDDBDA; \nwidth:100%; \npadding: 16px 40px 18px 13px;","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             border-bottom: solid 1px #DDDBDA; \nwidth:100%; \npadding: 16px 40px 18px 13px;","text":{"align":"","color":""}},"type":"block"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-2-FlexCard-1","key":"element_element_element_block_1_0_block_0_0_childCardPreview_1_0","name":"FlexCard","parentElementKey":"element_element_block_1_0_block_0_0","property":{"cardName":"cpqAppliedDiscounts","cardNode":"","isChildCardTrackingEnabled":false,"parentAttribute":{"cartId":"{Parent.cartId}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_items-section","container":{"class":""},"customClass":"cpq-discounts_items-section","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-0","key":"element_element_block_1_0_block_0_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#FFFFFF","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq-discount-block","container":{"class":""},"customClass":"cpq-discount-block","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FFFFFF;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"block"},{"children":[{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-0-Block-0-clone-0-Action-1","key":"element_element_element_element_block_1_0_block_1_0_block_0_0_action_0_0","name":"Action","parentElementKey":"element_element_element_block_1_0_block_1_0_block_0_0","property":{"card":"{card}","iconColor":"#000000","record":"{record}","stateAction":{"displayName":"Qualified Discounts","eventName":"cpq","extraParams":{"showQualified":"true"},"hasExtraParams":true,"id":"flex-action-1626864580169","message":"cpq_qualified","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"utility:moneybag"},"stateObj":"{record}"},"size":{"default":"5","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__available-discount_tab ","container":{"class":"cpq__available-discount_tab"},"customClass":"","elementStyleProperties":{"iconColor":"#000000"},"inlineStyle":"box-shadow:none;","margin":[],"padding":[],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"     : #ccc 1px solid; \n         box-shadow:none;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"#E8F3FD","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__available-discount_tab ","container":{"class":"cpq__available-discount_tab"},"elementStyleProperties":{"iconColor":"#000000"},"inlineStyle":"box-shadow: inset 0px -3px 0px #1589EE;","margin":[],"padding":[],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"background-color:#E8F3FD;     : #ccc 1px solid; \n         box-shadow: inset 0px -3px 0px #1589EE;","text":{"align":"","color":""}}},{"conditionString":"isQualifiedTabSelected == false","conditions":{"group":[{"field":"isQualifiedTabSelected","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":true,"isopen":true,"key":1,"label":"Qualified","name":"Qualified","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__available-discount_tab ","container":{"class":"cpq__available-discount_tab"},"customClass":"","elementStyleProperties":{"iconColor":"#000000"},"inlineStyle":"box-shadow:none;","margin":[],"padding":[],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"     : #ccc 1px solid; \n         box-shadow:none;","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Block-0-Block-0-clone-0-Action-0-clone-0","key":"element_element_element_element_block_1_0_block_1_0_block_0_0_action_1_0","name":"Action","parentElementKey":"element_element_element_block_1_0_block_1_0_block_0_0","property":{"card":"{card}","iconColor":"#000000","record":"{record}","stateAction":{"displayName":"Disqualified Discounts","eventName":"cpq","extraParams":{"showQualified":"false"},"hasExtraParams":true,"id":"flex-action-1626856325844","message":"cpq_qualified","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"utility:moneybag"},"stateObj":"{record}"},"size":{"default":"5","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#E8F3FD","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__available-discount_tab ","container":{"class":"cpq__available-discount_tab"},"elementStyleProperties":{"iconColor":"#000000"},"inlineStyle":"box-shadow: inset 0px -3px 0px #1589EE;","margin":[],"padding":[],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"background-color:#E8F3FD;     : #ccc 1px solid; \n         box-shadow: inset 0px -3px 0px #1589EE;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__available-discount_tab ","container":{"class":"cpq__available-discount_tab"},"elementStyleProperties":{"iconColor":"#000000"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"conditionString":"isQualifiedTabSelected == false","conditions":{"group":[{"field":"isQualifiedTabSelected","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":true,"isopen":true,"key":1,"label":"Disqualified","name":"Disqualified","styleObject":{"background":{"color":"#E8F3FD","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__available-discount_tab ","container":{"class":"cpq__available-discount_tab"},"elementStyleProperties":{"iconColor":"#000000"},"inlineStyle":"box-shadow: inset 0px -3px 0px #1589EE;","margin":[],"padding":[],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"background-color:#E8F3FD;     : #ccc 1px solid; \n         box-shadow: inset 0px -3px 0px #1589EE;","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-1-Block-0","key":"element_element_element_block_1_0_block_1_0_block_0_0","name":"Block","parentElementKey":"element_element_block_1_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"border-bottom: solid 1px #DDDBDA; \nwidth:100%; ","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         border-bottom: solid 1px #DDDBDA; \nwidth:100%; ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"border-bottom: solid 1px #DDDBDA; \nwidth:100%; ","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         border-bottom: solid 1px #DDDBDA; \nwidth:100%; ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-1-Block-1-FlexCard-4","key":"element_element_element_block_1_0_block_1_0_childCardPreview_1_0","name":"FlexCard","parentElementKey":"element_element_block_1_0_block_1_0","property":{"cardName":"cpqDiscountList","cardNode":"","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"parentAttribute":{"cartId":"{Parent.cartId}","discountType":"{isQualifiedTabSelected}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-discounts_items-section","container":{"class":""},"customClass":"cpq-discounts_items-section","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-1","key":"element_element_block_1_0_block_1_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#ffffff","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq-discount-block","container":{"class":""},"customClass":"cpq-discount-block","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#ffffff;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"#ffffff","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq-discount-block","container":{"class":""},"customClass":"cpq-discount-block","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#ffffff;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-1-Block-2-Action-0","key":"element_element_element_block_1_0_block_2_0_action_0_0","name":"Action","parentElementKey":"element_element_block_1_0_block_2_0","property":{"buttonVariant":"brand","card":"{card}","displayAsButton":true,"hideActionIcon":false,"iconColor":"#FFFFFF","reRenderFlyout":true,"record":"{record}","stateAction":{"cardName":"cpqCreateCustomDiscountModal","cardNode":"","displayName":"{Label.CPQCreateCustomDiscount}","flyoutLwc":"cpqCreateCustomDiscountModal","flyoutParams":{"cartId":"{Parent.cartId}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1628582641341","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":"utility:add"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{"iconColor":"#FFFFFF"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{"iconColor":"#FFFFFF"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-2","key":"element_element_block_1_0_block_2_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq-discount-body","container":{"class":""},"customClass":"cpq-discount-body","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq-discount-body","container":{"class":""},"customClass":"cpq-discount-body","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-m-around_none cpq-discount-container","container":{"class":"slds-card"},"customClass":"cpq-discount-container","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqDiscounts","Id":"a5a8a000000pFwkAAC","vlocity_cmt__GlobalKey__c":"cpqDiscount/Vlocity/2/1639134141096"};
  export default definition
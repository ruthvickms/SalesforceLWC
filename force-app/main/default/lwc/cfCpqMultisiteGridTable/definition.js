let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\"sites\": {}, \"selectedRows\": [], \"selectedGroupsCount\": 0, \"selectedUngroupedRecordsCount\": 0, \"selectedGroupedMembersCount\": 0, \"selectedGroupsInfoLabel\": \"0 groups selected\",\n\"selectedUngroupedRecordsInfoLabel\": \"0 ungrouped items selected\", \"selectedGroupedMembersInfoLabel\": \"0 grouped item selected\", \"selected\":false,\"totalCount\":0}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1635242308159-0l5ojcy1o","label":"Action","stateAction":{"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"sites","fieldValue":"{action.sites}"},{"fieldName":"totalCount","fieldValue":"{action.totalCount}"},{"fieldName":"Session.memberTypeLabel","fieldValue":"{action.memberTypeLabel}"}],"id":"flex-action-1637655021491","openUrlIn":"Current Window","subType":"PubSub","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpq_{recordId}_{Parent.type}","displayLabel":"cpq_{recordId}_{Parent.type}:multisite_sites","element":"action","eventLabel":"pubsub","eventname":"multisite_sites","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"false"},{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1633357707638-7dzi2re25","label":"Set Selected Rows","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"selectedRows","fieldValue":"{action.selectedRows}"},{"fieldName":"selectedGroupsCount","fieldValue":"{action.selectedGroupsCount}"},{"fieldName":"selectedUngroupedRecordsCount","fieldValue":"{action.selectedUngroupedRecordsCount}"},{"fieldName":"selectedGroupedMembersCount","fieldValue":"{action.selectedGroupedMembersCount}"},{"fieldName":"selectedGroupsInfoLabel","fieldValue":"{action.selectedGroupsInfoLabel}"},{"fieldName":"selectedUngroupedRecordsInfoLabel","fieldValue":"{action.selectedUngroupedRecordsInfoLabel}"},{"fieldName":"selectedGroupedMembersInfoLabel","fieldValue":"{action.selectedGroupedMembersInfoLabel}"},{"fieldName":"selectAll","fieldValue":"{action.selectAll}"},{"fieldName":"selectedAllUngroupedRecordsInfoLabel","fieldValue":"{action.selectedAllUngroupedRecordsInfoLabel}"}],"id":"flex-action-1633357709379","type":"cardAction"}}],"channelname":"cpq_{recordId}_{Parent.type}","displayLabel":"cpq_{recordId}_{Parent.type}:multisite_selectedsites","element":"action","eventLabel":"pubsub","eventname":"multisite_selectedsites","eventtype":"pubsub","key":"event-1","recordIndex":"0","showSpinner":"false"}],"isFlex":true,"lwc":{"DeveloperName":"cfCpqMultisiteGridTable_1_Vlocity","Id":"0Rb8a000000Dqy90AE","ManageableState":"unmanaged","MasterLabel":"cfCpqMultisiteGridTable_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"osSupport":true,"selectableMode":"Multi","sessionVars":[{"name":"memberTypeLabel","val":"Service Points"}],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"customLwc","elementLabel":"Custom LWC-0","name":"Custom LWC","property":{"customlwcname":"spinner","data-conditions":{"group":[{"field":"sites.isLoading","hasMergeField":false,"id":"state-new-condition-4","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":true,"size":"large","variant":"brand"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Selected Groups Information Text","key":"element_element_block_1_0_outputField_0_0","name":"Text","parentElementKey":"element_block_1_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"totalCount","hasMergeField":false,"id":"state-new-condition-0","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%7BtotalCount%7D%20%7BSession.memberTypeLabel%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"width: auto;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         width: auto;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"width: auto;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         width: auto;","text":{"align":"","color":""}}}],"type":"text","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Text-0-clone-0","key":"element_element_block_1_0_outputField_1_0","name":"Text","parentElementKey":"element_block_1_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"selectedGroupsCount","hasMergeField":false,"id":"state-new-condition-11","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cul%3E%0A%3Cli%3E%7BselectedGroupsInfoLabel%7D%3C/li%3E%0A%3C/ul%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"width: auto;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         width: auto;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"width: auto;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         width: auto;","text":{"align":"","color":""}}}],"type":"text","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"Selected Grouped Items Information Text","key":"element_element_block_1_0_outputField_2_0","name":"Text","parentElementKey":"element_block_1_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"selectedGroupedMembersCount","hasMergeField":false,"id":"state-new-condition-11","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cul%3E%0A%3Cli%3E%7BselectedGroupedMembersInfoLabel%7D%3C/li%3E%0A%3C/ul%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"width: auto;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         width: auto;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"width: auto;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         width: auto;","text":{"align":"","color":""}}}],"type":"text","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"Selected Ungrouped Items Information Text","key":"element_element_block_1_0_outputField_3_0","name":"Text","parentElementKey":"element_block_1_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"selectedUngroupedRecordsCount","hasMergeField":false,"id":"state-new-condition-11","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cul%3E%0A%3Cli%3E%7BselectedUngroupedRecordsInfoLabel%7D%3C/li%3E%0A%3C/ul%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"width: auto;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         width: auto;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"width: auto;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         width: auto;","text":{"align":"","color":""}}}],"type":"text","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"Block-1-Action-3","key":"element_element_block_1_0_action_4_0","name":"Action","parentElementKey":"element_block_1_0","property":{"actionList":[{"actionIndex":0,"card":"{card}","data-conditions":{"group":[{"field":"selectAll","hasMergeField":false,"id":"state-new-condition-41","operator":"==","type":"custom","value":"true"},{"field":"selectedUngroupedRecordsCount","hasMergeField":false,"id":"state-new-condition-51","logicalOperator":"&&","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"draggable":false,"hideActionIcon":true,"isOpen":true,"key":"1635333606202-91u8bi35k","label":"Action","record":"{record}","stateAction":{"displayName":"{Label.CPQSelectAll} ({totalCount})","eventName":"cpq_{recordId}_{Parent.type}","id":"flex-action-1635333608822","message":"multisite_select_all_click","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}","styles":{"label":{"color":"#0176D3"}}}],"card":"{card}","data-conditions":{"group":[{"field":"selectAll","hasMergeField":false,"id":"state-new-condition-41","operator":"==","type":"custom","value":"true"},{"field":"selectedUngroupedRecordsCount","hasMergeField":false,"id":"state-new-condition-51","logicalOperator":"&&","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"\\{Label.CPQSelectAll} ({totalCount})","record":"{record}","showSpinner":"false","stateObj":"{record}","styles":{"label":{"color":"#0176D3"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-select-all slds-p-left_x-small ","container":{"class":"cpq__multisite-select-all"},"elementStyleProperties":{"styles":{"label":{"color":"#0176D3"}}},"inlineStyle":"width: auto;","margin":[],"padding":[{"label":"left:x-small","size":"x-small","type":"left"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         width: auto;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-select-all slds-p-left_x-small ","container":{"class":"cpq__multisite-select-all"},"elementStyleProperties":{"styles":{"label":{"color":"#0176D3"}}},"inlineStyle":"width: auto;","margin":[],"padding":[{"label":"left:x-small","size":"x-small","type":"left"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         width: auto;","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_default cpq__multisite-selected-count slds-p-around_x-small ","container":{"class":"cpq__multisite-selected-count"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""},"theme":"theme_default"},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_default cpq__multisite-selected-count slds-p-around_x-small ","container":{"class":"cpq__multisite-selected-count"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""},"theme":"theme_default"}}],"type":"block"},{"class":"slds-col ","element":"customLwc","elementLabel":"Custom LWC-2","name":"Custom LWC","property":{"channelName":"cpq_{recordId}_{Parent.type}","columns":"{sites.columns}","customEventName":"multisite","customlwcname":"cpqTreeGrid","expandedRows":"{sites.expandedRows}","gridData":"{sites.data}","keyField":"{sites.keyField}","loadMoreGroupMembersButtonLabel":"{Label.MSLoadMoreLabel}","selectedRows":"{selectedRows}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"overflow: scroll;","margin":[],"maxHeight":"500px","padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n       max-height:500px;  overflow: scroll;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"overflow: scroll;","margin":[],"maxHeight":"500px","padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n       max-height:500px;  overflow: scroll;","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_x-small slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqMultisiteGridTable","Id":"a5a8a000000pFzgAAC","vlocity_cmt__GlobalKey__c":"cpqMultisiteGridTable/Vlocity/3/1633355253717"};
  export default definition
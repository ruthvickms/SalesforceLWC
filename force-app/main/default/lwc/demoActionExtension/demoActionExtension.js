import { api, LightningElement } from 'lwc';

import template from './demoActionExtension.html';
    import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';
import OmniscriptSetValues from "vlocity_cmt/omniscriptSetValues";
import OmniscriptCancelAction from 'vlocity_cmt/omniscriptCancelAction';
import OmniscriptHeader from 'vlocity_cmt/omniscriptHeader';
    export default class demoActionExtension extends OmniscriptBaseMixin(OmniscriptSetValues) {
       render(){
        return template;
    }
    @api
    execute() {
        this.runAction(this.jsonDef);
        switch(this.jsonDef.propSetMap.navigateTo){
            case 'nextStep':
                this.omniNextStep();
                break;
            case 'previousStep':
                this.omniPrevStep();
                break;
            case 'step' : 
                this.omniNavigateTo(this.jsonDef.propSetMap.stepName);
            case 'cancel' : OmniscriptHeader.cancel();
            default: 
            console.log('default');
        }
    }
    
    }
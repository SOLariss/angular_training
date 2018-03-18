import {Component, ElementRef, Input} from '@angular/core';

@Component({
    selector: 'counter',
    template: `<div class="counter-wrapper">
        <div class="counter-label">{{ config.label }}</div>
        <div class="counter-content">
            <span class="counter-content-prefix">{{config.prefix}}</span>
            <input type="text" class="counter-content-input"></input>
        </div>
    </div>` 
})
export class Counter {
    constructor(private _elRef: ElementRef) {        
    }
    @Input() options: {
        min:number, 
        max:number, 
        suffix: string, 
        prefix: string, 
        step: number,
        label: string,
        require: string
    }
}
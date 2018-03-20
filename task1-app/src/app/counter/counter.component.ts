import {Component, ElementRef, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'counter',
    styleUrls: ['./counter.component.scss'],
    template: `<div class="counter-wrapper">
        <label class="counter-label">{{ options.label }}</label>
        <label class="counter-label-required{{options.require ? '': '_hidden'}}">*</label>
        <div class="counter-content">
            <label class="counter-content-prefix">{{options.prefix}}</label>
            <input type="number" class="counter-content-input" [(ngModel)]="value" min="{{options.min}}" max="{{options.max}}" step="options.step" (change)="changed($event)" (keyup)="changed($event)" (paste)="changed($event)">            
            <label class="counter-content-suffix">{{options.suffix}}</label>
        </div>
        <label class="counter-error{{error? '': '_hidden'}}">Range error: you could type values from {{options.min}} to {{options.max}}</label>
    </div>` 
})
export class Counter {
    value = 0;
    error = false;
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

    @Output() valueChanged: EventEmitter<number> = new EventEmitter();

    changed(e){
        if (this.options.min < this.value && this.value < this.options.max) {
            this.error=false;
            this.valueChanged.emit(this.value);
        } else {
            this.error = true;
        }
    }
}
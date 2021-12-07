import { animate, style, transition, trigger } from "@angular/animations";

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateY(10px)' }),
        animate(500)
    ]),

    transition(':leave', [
        animate(200, style({ transform: 'translateY(20%)'}))
    ])
]);

export let fade = trigger('fade', [
    transition(':enter', [
        style({ opacity: '5%' }),
        animate(500)
    ])
]);


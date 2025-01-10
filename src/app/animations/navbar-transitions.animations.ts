import { animate, state, style, transition, trigger } from "@angular/animations";

export const navbarCollapseAnimation = trigger('navbarCollapseAnimation', [
    state('void', style({
        padding: 0,
        margin: 0,
        height: 0,
        minHeight: 0,
        transform: 'scale(.9)'
    })),
    transition(':enter, :leave', [
        animate('250ms ease-in-out')
    ])
]);
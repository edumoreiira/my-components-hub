import { animate, state, style, transition, trigger } from "@angular/animations";

export const navbarItemCollapseAnimation = trigger('navbarItemCollapseAnimation', [
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

export const navbarSidebarSlideInOutAnimation = trigger('navbarSidebarSlideInOutAnimation', [
    state('void', style({
        width: 0,
        minWidth: 0,
        padding: 0,
        margin: 0,
    })),
    transition(':enter, :leave', [
        animate('300ms ease-in-out')
    ])
]);
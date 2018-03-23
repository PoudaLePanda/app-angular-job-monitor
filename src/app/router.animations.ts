import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  keyframes
} from '@angular/animations';

export const paneltop = trigger('paneltop', [
  state("true", style({ transform: 'translateY(-100%)' })),
  state("false", style({ transform: 'translateY(0)' })),
  transition("false <=> true", animate('500ms ease-in-out'))
]);

export const panelbottom = trigger('panelbottom', [
  state("true", style({ transform: 'translateY(+100%)' })),
  state("false", style({ transform: 'translateY(0)' })),
  transition("false <=> true", animate('500ms ease-in-out'))
]);

export const panelcenter = trigger('panelcenter', [
  state("true", style({ transform: 'translateX(+110%)' })),
  state("false", style({ transform: 'translateY(0)' })),
  transition("false <=> true", animate('500ms ease-in-out'))
]);

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-in-out', style({ opacity: 1 }))
  ])
]);

export const visibilityChanged = trigger('visibilityChanged', [
  state('true', style({ opacity: 1 })),
  state('false', style({ opacity: 0 })),
  transition('true => false', animate('500ms ease-in-out')),
  transition('false => true', animate('500ms ease-in-out')),
]);

export const fadeIn = trigger("fadeIn", [
  transition(":enter", [
    style({ opacity: "0" }),
    animate("500ms ease-in-out", style({ opacity: "1" }))
  ]),
  transition(":leave", [
    style({ opacity: "1" }),
    animate("500ms ease-in-out", style({ opacity: "0" }))
  ])
]);

export const routerOpacity = trigger("routerOpacity", [
  transition("false => true", [
    style({ opacity: "1" }),
    animate("1s ease-in-out", keyframes([
      style({ opacity: "0", offset: 0 }),
      style({ opacity: "0", offset: 0.7 }),
      style({ opacity: "1", offset: 1.0 })
    ]))
  ]),
  transition("true => false", [
    style({ opacity: "1" }),
    // animate("0.5s ease-in-out", style({ opacity: "0" }))
    animate("1s ease-in-out", keyframes([
      style({ opacity: "1", offset: 0 }),
      style({ opacity: "1", offset: 0.7 }),
      style({ opacity: "0", offset: 1.0 })
    ]))
  ])
]);

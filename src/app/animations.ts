import { animate, animateChild, group, query, sequence, style, transition, trigger } from "@angular/animations";

export const slideRightAnimation = trigger('routejAnimations', [
    transition(':enter', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ left: '-100%' })
        ]),
        query(':leave', [
            style({ left: '0' })
        ]),
        group([
            query(':leave', [
                animate('1000ms ease-out', style({ left: '100%' }))
            ]),
            query(':enter', [
                animate('1000ms ease-out', style({ left: '0' }))
            ]),
        ]),
    ]),
    transition("homepage=>aboutpage", [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ left: '-100%' })
        ]),
        query(':leave', [
            style({ left: '0' })
        ]),
        sequence([
            query(':leave', [
                animate('1000ms ease-out', style({ left: '100%' }))
            ]),
            query(':enter', [
                animate('1000ms ease-out', style({ left: '0' }))
            ]),
        ]),

        // group([
        //     // query(":enter", [
        //     //     animate("2000ms ease-out", style({ top: "0" }))
        //     // ]),
        //     query(":leave", [
        //         animate("2000ms ease-out", style({  opacity: "0" }))
        //     ]),
        // ])
    ])
]);
export const triggerRouteAnimation = trigger("routeAnimation", [
    transition("* <=> *", [
        query(":enter .container", [
            style({
                opacity: 0,
                position:"absolute"
            })
        ],{ optional: true }),
        query(":leave .container", [
            style({
                opacity: 1
            })
        ],{ optional: true }),
        sequence([
            query(":leave .container ", [
                animate("400ms", style({ opacity: 0 })),
                style({position:"absolute"})
            ],{ optional: true }),
            query(":enter .container ", [
                style({position:"static"}),
                animate("400ms", style({ opacity: 1 }))
            ],{ optional: true })

        ])
    ])
])

export const homepage_workpage_card_animation = trigger("newcards", [
    transition("*<=>*", [
      query(":enter", [
        style({
            opacity: 0,
            position:"absolute"
        })
    ],{ optional: true }),
    sequence([
        query(":leave", [
            animate("600ms", style({ opacity: 0 })),
            style({position:"absolute"})
        ],{ optional: true }),
        query(":enter", [
            style({position:"static"}),
            animate("600ms", style({ opacity: 1 }))
        ],{ optional: true })
    ])
    ])

  ])
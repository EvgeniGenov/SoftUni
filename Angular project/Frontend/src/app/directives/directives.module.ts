import { NgModule } from '@angular/core';

import { LettersOnlyDirective } from './only-letters.directive';

@NgModule({
    declarations: [
        LettersOnlyDirective,
    ],
    exports: [
        LettersOnlyDirective,
    ]
})

export class DirectivesModule { }
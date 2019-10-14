import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatListModule, MatIconModule, MatButtonModule,
    MatTooltipModule, MatTabsModule, MatProgressBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    exports: [
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatTooltipModule,
        MatTabsModule,
        MatProgressBarModule
    ]
})
export class MaterialModule { }
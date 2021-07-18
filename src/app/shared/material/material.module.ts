import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {
    MatIconModule, 
    MatToolbarModule, 
    MatButtonModule,
    MatListModule, 
    MatCardModule, 
    MatProgressBarModule, 
    MatInputModule,
    MatSnackBarModule, 
    MatMenuModule, 
    MatSidenavModule,
    MatProgressSpinnerModule, 
    MatDatepickerModule,    
    MatTableModule,
    MatAutocompleteModule, 
    MatDialogModule, 
    MatTabsModule, 
    MatTooltipModule,
    MatSelectModule, 
    MatPaginatorModule, 
    MatChipsModule, 
    MatButtonToggleModule,
    MatSlideToggleModule, 
    MatBadgeModule, 
    MatCheckboxModule, 
    MatExpansionModule, 
    MatSortModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    MatMomentDateModule,
    MatIconModule, 
    MatToolbarModule, 
    MatButtonModule,
    MatListModule, 
    MatCardModule, 
    MatProgressBarModule, 
    MatInputModule,
    MatSnackBarModule, 
    MatMenuModule, 
    MatSidenavModule,
    MatProgressSpinnerModule, 
    MatDatepickerModule,    
    MatTableModule,
    MatAutocompleteModule, 
    MatDialogModule, 
    MatTabsModule, 
    MatTooltipModule,
    MatSelectModule, 
    MatPaginatorModule, 
    MatChipsModule, 
    MatButtonToggleModule,
    MatSlideToggleModule, 
    MatBadgeModule, 
    MatCheckboxModule, 
    MatExpansionModule, 
    MatSortModule,
    DragDropModule
  ],
  exports: [
    CommonModule,
    MatIconModule, 
    MatToolbarModule, 
    MatButtonModule,
    MatListModule, 
    MatCardModule, 
    MatProgressBarModule, 
    MatInputModule,
    MatSnackBarModule, 
    MatMenuModule, 
    MatSidenavModule,
    MatProgressSpinnerModule, 
    MatDatepickerModule,    
    MatTableModule,
    MatAutocompleteModule, 
    MatDialogModule, 
    MatTabsModule, 
    MatTooltipModule,
    MatSelectModule, 
    MatPaginatorModule, 
    MatChipsModule, 
    MatButtonToggleModule,
    MatSlideToggleModule, 
    MatBadgeModule, 
    MatCheckboxModule, 
    MatExpansionModule, 
    MatSortModule,
    DragDropModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
})
export class MaterialModule {
  static forRoot() {
    return {
      ngModule: MaterialModule,
      providers: [
      ]
    };
  }
}

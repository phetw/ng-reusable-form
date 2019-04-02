import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

const exportedCoreModules = [ReactiveFormsModule, NgSelectModule, HttpClientModule];

@NgModule({
  imports: [CommonModule, ...exportedCoreModules],
  exports: [...exportedCoreModules]
})
export class CoreModule {}

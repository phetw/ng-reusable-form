import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { NgSelectModule } from "@ng-select/ng-select"
import { ReactiveFormsModule } from "@angular/forms"

const exportedCoreModules = [ReactiveFormsModule, NgSelectModule]

@NgModule({
  declarations: [],
  imports: [CommonModule, ...exportedCoreModules],
  exports: exportedCoreModules,
})
export class CoreModule {}

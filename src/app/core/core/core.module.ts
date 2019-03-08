import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

const exportedCoreModules = [FormsModule, ReactiveFormsModule]

@NgModule({
  declarations: [],
  imports: [CommonModule, ...exportedCoreModules],
  exports: exportedCoreModules,
})
export class CoreModule {}

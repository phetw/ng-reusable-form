import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AddressFormComponent } from "./address-form/address-form.component"
import { NgSelectModule } from "@ng-select/ng-select"

const declarations = [AddressFormComponent]

@NgModule({
  declarations: declarations,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  exports: declarations,
})
export class SharedModule {}

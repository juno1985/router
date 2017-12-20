import { CanDeactivate } from "@angular/router";
import { ProductComponent } from "../product/product.component";


//泛型里写保护的组件
export class UnsavedGuard implements CanDeactivate<ProductComponent>{
    canDeactivate(component: ProductComponent){
        return window.confirm("您还没有保存,确定要离开么?");
    }
}
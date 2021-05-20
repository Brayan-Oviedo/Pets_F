import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { interceptorProvider } from '../../auth/interceptor/interceptor.service'

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
   interceptorProvider
  ]
})
export class BaseModule {}
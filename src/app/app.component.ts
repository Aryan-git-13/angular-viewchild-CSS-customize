import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('hello', { static: true }) hello: ElementRef;
  @ViewChild('text', { static: false }) text: ElementRef; // { static: false } có từ Angular 8+

  ngOnInit() {
    // { static: true } khi bạn muốn truy cập ViewChild vào ngOnInit.
    // { static: true } needs to be set when you want to access the ViewChild in ngOnInit.
    // Starting from Angular v9. x static has a default value of false
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.hello);
    this.text.nativeElement.style.animationDuration = '10s';
    // { static: false } chỉ có thể được truy cập trong ngAfterViewInit. Đây cũng là những gì bạn muốn thực hiện khi bạn có một chỉ thị cấu trúc (tức là *ngIf) trên phần tử của bạn trong mẫu của bạn.
    // { static: false } can only be accessed in ngAfterViewInit. This is also what you want to go for when you have a structural directive (i.e. *ngIf) on your element in your template.
  }
}

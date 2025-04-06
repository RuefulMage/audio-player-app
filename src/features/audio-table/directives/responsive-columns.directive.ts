import { Directive, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResponsiveColumns]',
})
export class ResponsiveColumnsDirective implements OnInit {
  @Input() columnRules: { breakpoint: number; columns: string[] }[] = [];
  @Input() defaultColumns: string[] = [];
  @Input() displayedColumns: string[] = [];

  ngOnInit() {
    this.updateColumns();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateColumns();
  }

  updateColumns() {
    const width = window.innerWidth;
    const rule = this.columnRules.find((rule) => width < rule.breakpoint);

    this.displayedColumns.splice(0);
    this.displayedColumns.push(...(rule ? rule.columns : this.defaultColumns));
  }
}

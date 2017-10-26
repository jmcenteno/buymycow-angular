import { Component, TemplateRef, ViewChild, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalRef: BsModalRef;

  @Input() config: any;

  @ViewChild('template') template: TemplateRef<any>;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  show() {

    this.modalRef = this.modalService.show(this.template, this.config);

  }

  hide() {

    this.modalRef.hide();

  }

}

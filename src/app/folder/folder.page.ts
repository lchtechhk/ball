import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigProvider } from '../providers/ConfigProvider';
import { ObjectUtils } from '../providers/ObjectUtils';
import { UIProvider } from '../providers/UIProvider';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private config: ConfigProvider,
    private ObjectUtils: ObjectUtils,
    private uiProvider: UIProvider,
    private activatedRoute: ActivatedRoute) {
  }

  get() {
    this.uiProvider.presentLoadingDefault();
    this.config.get(this.config.url + 'get_test', (res: any) => {
      alert(JSON.stringify(res))
      console.log("res : " + JSON.stringify(res));
    }, (error: any) => {
      alert(JSON.stringify(error))
    });
  }

  post(){
    this.uiProvider.presentLoadingDefault();
    let login_profile = {username:"internalstaff", email:"internalstaff@gmail.com", password:"123123"};

    this.config.post(this.config.url + 'post_test','',(res: any) => {
      alert(JSON.stringify(res))
      console.log("res : " + JSON.stringify(res));
    }, (error: any) => {
      alert(JSON.stringify(error))
    });

  }
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

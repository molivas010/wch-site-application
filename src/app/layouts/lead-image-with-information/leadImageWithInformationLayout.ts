/*******************************************************************************
 * Copyright IBM Corp. 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
import { LayoutComponent, RenderingContext } from '@ibm-wch-sdk/ng';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TypeLeadImageWithInformationComponent } from '../../components/lead-image-with-information/typeLeadImageWithInformationComponent';
import { Constants } from '../../Constants';
import { UtilsService } from '@ibm-wch/components-ng-shared-utilities';

/**
 * @name leadImageLayout
 * @id lead-image-layout
 */
@LayoutComponent({
	selector: 'lead-image-layout',
})
@Component({
	selector: 'app-lead-image-with-information-layout-component',
	templateUrl: './leadImageWithInformationLayout.html',
	styleUrls: ['./leadImageWithInformationLayout.scss'],
})
export class LeadImageWithInformationLayoutComponent
	extends TypeLeadImageWithInformationComponent
	implements OnInit, OnDestroy {
	rContext: RenderingContext;
	constants: any = Constants;

	public readonly LEAD_IMAGE_KEY: string = 'leadImage';

	@Input()
	layoutMode: string;

	constructor(private utilsService: UtilsService) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();

		this.safeSubscribe(this.onRenderingContext, renderingContext => {
			this.rContext = renderingContext;
			this.layoutMode = this.layoutMode || this.constants.DETAIL;
		});
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}

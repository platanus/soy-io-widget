import { mountIframeToDOM } from './widget';
import { onMounted } from './listeners';
import { setReady, setConfig } from './events';

export interface WidgetProps {
  userEmail?: string
  companyName?: string
}
class Widget {
  private iframe: HTMLIFrameElement;
  userEmail?: string;
  companyName?: string;

  constructor({ userEmail = undefined, companyName = undefined }: WidgetProps) {
    this.iframe = mountIframeToDOM();
    this.userEmail = userEmail;
    this.companyName = companyName;

    onMounted(this.initialize.bind(this));
  }

  initialize() {
    setConfig(this.iframe, { userEmail: this.userEmail, companyName: this.companyName });
    setReady(this.iframe);
  }
}

export default Widget;

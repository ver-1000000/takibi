/**
 * DOM$B$N%W%m%Q%F%#$K!"(BXSS$B@H<e@-$N2DG=@-$r;}$DJ8;zNs$r%5%K%?%$%:$9$k!#(B
 *
 * SEE ALSO: {@link https://angular.io/guide/security#xss}
 */
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {
  }

  transform(value: string | number, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    value = String(value);
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Unable to bypass security for invalid type: ${type}`);
    }
  }
}

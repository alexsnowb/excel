import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    });
  }

  onInput(event) {
    console.log('onInput Formula', event);
  }
}

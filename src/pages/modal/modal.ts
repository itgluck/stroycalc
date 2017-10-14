import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  news;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var all_news = [
      {
        title: 'НАКОПИТЕЛЬНАЯ КАРТА',
        note: '«ТД СТРОИТЕЛЬ»',
        image: 'assets/img/bonus-card.png',
        items: [
          { block: 'Карту может получить любой желающий.' },
          { block: 'При покупке любого товара 4% начисляется на карту баллами.' },
          { block: '1 балл равен 1 рублю.' },
          { block: 'Срок действия баллов не ограничен.' },
          { block: 'Процент начисления баллов может быть увеличен при проведении акций.' },
          { block: 'Срок действия акционных баллов составляет 3 месяца.' },
          { block: 'Баллы начисляются на следующий день после покупки.' },
          { block: 'Баллами возможно оплатить до 100% покупки.' },
          { block: 'Для получения карты "ТД Строитель" достаточно заполнить анкету и оплатить стоимость карты в размере 100 рублей в любом магазине Торгового дома Строитель. На счет карты сразу будет начислено 100 баллов.' },
          { block: 'Карту возможно получить при заказе материалов по телефону контакт-центра 777-239 или на сайте ТД Строитель. В этом случае баллы будут начислены на весь размер покупки, а карта будет доставлена вместе с заказанными товарами.' },
          { block: 'Накопленными баллами можно оплатить покупки в магазинах ТД Строитель, интернет-заказы или заказы оформленные в контакт-центре.' },
          { block: 'В случае оплаты покупки баллами, оставшаяся часть стоимости покупки может оплачивается наличными денежными средствами или банковской картой. На часть стоимости товаров, оплаченную платежными средствами, баллы не начисляются.' },
          { block: 'При возврате товара, оплата которого производилась баллами, держателю карты возвращается уплаченная им денежная сумма, израсходованные баллы восстанавливаются на его счету, начисленные за покупку баллы аннулируются.' },
          { block: 'Количество накопленных баллов можно узнать в магазинах Торгового дома Строитель при предъявлении карты, а также по телефону контакт-центра 777-239.' },
          { block: 'При получении карты необходимо указать кодовое слово, оно необходимо для проверки количества накопленных баллов по телефону контакт-центра ТД Строитель, а также для оплаты баллами заказа по телефону или на сайте www.tdsroitel.ru.' },
          { block: 'Паспортные данные при заполнении анкеты обязательны для изменения данных о держателе карты (в том числе кодового слова), заведения дополнительных карт, а также для восстановления или блокировки карты, в случае утери.' },
        ]
      },
      {
        title: 'Правила доставки',
        note: 'Как получить купленный у нас товар',
        image: 'assets/img/002.png',
        items: [
          { block: 'Отдел доставки товаров Торгового Дома «Строитель» оперативно доставит строительные и отделочные материалы, инструмент и оборудование по Калининграду и в любой пункт Калининградской области. Так же вы можете забрать свой заказ самостоятельно в одном изпунктов самовывоза.' },
          { block: 'Доставка осуществляется в пределах Калининградской области.' },
          { block: 'Водитель не выезжает на место доставки без предварительного звонка Покупателю. Цель звонка — согласование готовности принять товар, уточнение адреса, пути, места подъезда машины. Если в течение 30 минут после загрузки машины на доставку Покупатель не выходит на связь, машина выгружается на складе магазина. Доставка считается осуществленной.' },
          { block: 'Доставка осуществляется «до подъезда» (объекта) Покупателя.' },
          { block: 'Время ожидания Заказчика на месте 15 минут.' },
          { block: 'Выгрузка осуществляется силами и средствами Покупателя. Возможна выгрузка силами грузчиков. Оплата за услуги грузчиков осуществляется отдельно. Стоимость работы одного грузчика: 200 рублей за час.' },
        ]         
      },
    
    ];
    this.news = all_news[this.params.get('id')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
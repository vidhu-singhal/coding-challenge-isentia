import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicFeedService {

  public mockedFeed = [{
    'title': ' ',
    'link': 'https://www.flickr.com/photos/139005576@N04/30976568597/',
    'media': {'m': 'https://farm5.staticflickr.com/4896/30976568597_079bcde76d_m.jpg'},
    'date_taken': '2018-11-16T17:56:16-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/139005576@N04/">y67786715</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/139005576@N04/30976568597/" title=" "><img src="https://farm5.staticflickr.com/4896/30976568597_079bcde76d_m.jpg" width="180" height="240" alt=" " /></a></p> ',
    'published': '2018-11-17T01:56:16Z',
    'author': 'nobody@flickr.com ("y67786715")',
    'author_id': '139005576@N04',
    'tags': ''
  }, {
    'title': 'IMG_1258.jpg',
    'link': 'https://www.flickr.com/photos/166889738@N08/32044197998/',
    'media': {'m': 'https://farm5.staticflickr.com/4815/32044197998_f4e016ef26_m.jpg'},
    'date_taken': '2018-11-14T17:56:08-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/166889738@N08/">kali_shelhamer</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/166889738@N08/32044197998/" title="IMG_1258.jpg"><img src="https://farm5.staticflickr.com/4815/32044197998_f4e016ef26_m.jpg" width="160" height="240" alt="IMG_1258.jpg" /></a></p> ',
    'published': '2018-11-17T01:56:19Z',
    'author': 'nobody@flickr.com ("kali_shelhamer")',
    'author_id': '166889738@N08',
    'tags': ''
  }, {
    'title': 'WhatsApp to 0103425700 ift.tt/2zWbFIe',
    'link': 'https://www.flickr.com/photos/160491815@N03/32044198408/',
    'media': {'m': 'https://farm5.staticflickr.com/4901/32044198408_a3264e5a31_m.jpg'},
    'date_taken': '2018-11-16T17:56:22-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/160491815@N03/">4573975.f483ab4b</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/160491815@N03/32044198408/" title="WhatsApp to 0103425700 ift.tt/2zWbFIe"><img src="https://farm5.staticflickr.com/4901/32044198408_a3264e5a31_m.jpg" width="100" height="100" alt="WhatsApp to 0103425700 ift.tt/2zWbFIe" /></a></p> <p>WhatsApp to 0103425700 <a href="https://ift.tt/2qPT5xb" rel="nofollow">ift.tt/2qPT5xb</a></p>',
    'published': '2018-11-17T01:56:22Z',
    'author': 'nobody@flickr.com ("4573975.f483ab4b")',
    'author_id': '160491815@N03',
    'tags': ''
  }, {
    'title': 'Ten Ugly Truth About Custom Made Table Linens | custom made table linens',
    'link': 'https://www.flickr.com/photos/138962131@N03/32044198698/',
    'media': {'m': 'https://farm5.staticflickr.com/4862/32044198698_90573aa1c7_m.jpg'},
    'date_taken': '2018-11-16T17:56:24-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/138962131@N03/">Roy Home Design</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/138962131@N03/32044198698/" title="Ten Ugly Truth About Custom Made Table Linens | custom made table linens"><img src="https://farm5.staticflickr.com/4862/32044198698_90573aa1c7_m.jpg" width="174" height="240" alt="Ten Ugly Truth About Custom Made Table Linens | custom made table linens" /></a></p> <p>#CustomMadeRoundTablecloths, #CustomMadeTableLinenUk, #CustomMadeTableLinens, #CustomMadeTableclothsAustralia, #CustomMadeTableclothsUk<br /> This particular my content on Ten Ugly Truth About Custom Made Table Linens | custom made table linens &#8211; custom made table linens<br /> with this page you can see so stunning design regarding Ten Ugly Truth About Custom Made Table Linens | custom made table linens &#8211; custom made table... <br /> ❤❤❤ More great photos, tips, ideas and inspirations, please visit <a href="https://is.gd/3v0LcI" rel="nofollow">is.gd/3v0LcI</a></p>',
    'published': '2018-11-17T01:56:24Z',
    'author': 'nobody@flickr.com ("Roy Home Design")',
    'author_id': '138962131@N03',
    'tags': 'custommaderoundtablecloths custommadetablelinenuk custommadetablelinens custommadetableclothsaustralia custommadetableclothsuk'
  }, {
    'title': 'IMG_0778.jpg',
    'link': 'https://www.flickr.com/photos/retratosdomica/32044201228/',
    'media': {'m': 'https://farm5.staticflickr.com/4885/32044201228_c0b9e074df_m.jpg'},
    'date_taken': '2018-11-05T02:18:30-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/retratosdomica/">retratosdomica</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/retratosdomica/32044201228/" title="IMG_0778.jpg"><img src="https://farm5.staticflickr.com/4885/32044201228_c0b9e074df_m.jpg" width="240" height="160" alt="IMG_0778.jpg" /></a></p> ',
    'published': '2018-11-17T01:56:38Z',
    'author': 'nobody@flickr.com ("retratosdomica")',
    'author_id': '153845912@N06',
    'tags': ''
  }, {
    'title': '2018-11-16_07-56-40',
    'link': 'https://www.flickr.com/photos/149235994@N05/32044201848/',
    'media': {'m': 'https://farm5.staticflickr.com/4812/32044201848_9acc02ea4d_m.jpg'},
    'date_taken': '2018-11-16T17:56:42-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/149235994@N05/">rebagibbons2</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/149235994@N05/32044201848/" title="2018-11-16_07-56-40"><img src="https://farm5.staticflickr.com/4812/32044201848_9acc02ea4d_m.jpg" width="177" height="240" alt="2018-11-16_07-56-40" /></a></p> ',
    'published': '2018-11-17T01:56:42Z',
    'author': 'nobody@flickr.com ("rebagibbons2")',
    'author_id': '149235994@N05',
    'tags': ''
  }, {
    'title': 'Railpage Albion Camera #3 Rail Movement Detection',
    'link': 'https://www.flickr.com/photos/kubcam3/44099374190/',
    'media': {'m': 'https://farm5.staticflickr.com/4889/44099374190_0e52d60805_m.jpg'},
    'date_taken': '2018-11-17T12:56:20-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/kubcam3/">Railpage Albion Railcam 3</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/kubcam3/44099374190/" title="Railpage Albion Camera #3 Rail Movement Detection"><img src="https://farm5.staticflickr.com/4889/44099374190_0e52d60805_m.jpg" width="240" height="135" alt="Railpage Albion Camera #3 Rail Movement Detection" /></a></p> <p>Total axel count....<br /> Please view the camera:http://10.10.19.4:80/index.html</p>',
    'published': '2018-11-17T01:56:20Z',
    'author': 'nobody@flickr.com ("Railpage Albion Railcam 3")',
    'author_id': '137412266@N06',
    'tags': 'railpage railways australia melbourne railcam albion nodekub'
  }, {
    'title': ' ',
    'link': 'https://www.flickr.com/photos/cykbertha/44099375630/',
    'media': {'m': 'https://farm5.staticflickr.com/4873/44099375630_84ed34b968_m.jpg'},
    'date_taken': '2018-11-16T02:24:03-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/cykbertha/">petit oiseau Amelie</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/cykbertha/44099375630/" title=" "><img src="https://farm5.staticflickr.com/4873/44099375630_84ed34b968_m.jpg" width="180" height="240" alt=" " /></a></p> ',
    'published': '2018-11-17T01:56:35Z',
    'author': 'nobody@flickr.com ("petit oiseau Amelie")',
    'author_id': '75026951@N00',
    'tags': ''
  }, {
    'title': '20181116205454ch01',
    'link': 'https://www.flickr.com/photos/10194419@N00/44099376120/',
    'media': {'m': 'https://farm5.staticflickr.com/4836/44099376120_fbabd100bd_m.jpg'},
    'date_taken': '2018-11-16T20:56:41-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/10194419@N00/">Boot Seem</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/10194419@N00/44099376120/" title="20181116205454ch01"><img src="https://farm5.staticflickr.com/4836/44099376120_fbabd100bd_m.jpg" width="240" height="135" alt="20181116205454ch01" /></a></p> <p>Alarm Event: Motion Detect<br /> Alarm Input Channel: 1<br /> Alarm Start Time(D/M/Y H:M:S): 16/11/2018 20:54:54<br /> Alarm Device Name: AMC046CC_31B4BF<br /> Alarm Name:<br /> IP Address: 192.168.1.251</p>',
    'published': '2018-11-17T01:56:41Z',
    'author': 'nobody@flickr.com ("Boot Seem")',
    'author_id': '10194419@N00',
    'tags': 'olden2'
  }, {
    'title': 'everydays / arbor sanctuary',
    'link': 'https://www.flickr.com/photos/68405323@N06/45002921155/',
    'media': {'m': 'https://farm5.staticflickr.com/4918/45002921155_f85b07f901_m.jpg'},
    'date_taken': '2018-11-16T19:38:30-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/68405323@N06/">drewmadestuff</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/68405323@N06/45002921155/" title="everydays / arbor sanctuary"><img src="https://farm5.staticflickr.com/4918/45002921155_f85b07f901_m.jpg" width="240" height="135" alt="everydays / arbor sanctuary" /></a></p> <p>11/16/2018</p>',
    'published': '2018-11-17T01:56:11Z',
    'author': 'nobody@flickr.com ("drewmadestuff")',
    'author_id': '68405323@N06',
    'tags': 'everydays cinema4d'
  }, {
    'title': 'IMG_3948a',
    'link': 'https://www.flickr.com/photos/knutty_knights/45002923355/',
    'media': {'m': 'https://farm5.staticflickr.com/4806/45002923355_a78058ce9d_m.jpg'},
    'date_taken': '2018-11-11T08:50:49-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/knutty_knights/">Dick Knight</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/knutty_knights/45002923355/" title="IMG_3948a"><img src="https://farm5.staticflickr.com/4806/45002923355_a78058ce9d_m.jpg" width="240" height="159" alt="IMG_3948a" /></a></p> ',
    'published': '2018-11-17T01:56:20Z',
    'author': 'nobody@flickr.com ("Dick Knight")',
    'author_id': '16114426@N05',
    'tags': ''
  }, {
    'title': 'For Him D',
    'link': 'https://www.flickr.com/photos/168044759@N03/45002926575/',
    'media': {'m': 'https://farm5.staticflickr.com/4881/45002926575_ab2e9d99f8_m.jpg'},
    'date_taken': '2018-11-16T17:56:34-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/168044759@N03/">vyvynhobe</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/168044759@N03/45002926575/" title="For Him D"><img src="https://farm5.staticflickr.com/4881/45002926575_ab2e9d99f8_m.jpg" width="240" height="160" alt="For Him D" /></a></p> ',
    'published': '2018-11-17T01:56:34Z',
    'author': 'nobody@flickr.com ("vyvynhobe")',
    'author_id': '168044759@N03',
    'tags': ''
  }, {
    'title': '_M2K1227.jpg',
    'link': 'https://www.flickr.com/photos/txstars/45002927195/',
    'media': {'m': 'https://farm5.staticflickr.com/4834/45002927195_b76b25947b_m.jpg'},
    'date_taken': '2018-11-16T19:16:49-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/txstars/">Texas Stars Hockey</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/txstars/45002927195/" title="_M2K1227.jpg"><img src="https://farm5.staticflickr.com/4834/45002927195_b76b25947b_m.jpg" width="240" height="132" alt="_M2K1227.jpg" /></a></p> ',
    'published': '2018-11-17T01:56:37Z',
    'author': 'nobody@flickr.com ("Texas Stars Hockey")',
    'author_id': '91539243@N02',
    'tags': ''
  }, {
    'title': 'Alberni Fitness',
    'link': 'https://www.flickr.com/photos/154836685@N07/45191209844/',
    'media': {'m': 'https://farm5.staticflickr.com/4905/45191209844_cd8dc562f8_m.jpg'},
    'date_taken': '2018-11-16T17:56:12-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/154836685@N07/">pattersonwetsublexperve4</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/154836685@N07/45191209844/" title="Alberni Fitness"><img src="https://farm5.staticflickr.com/4905/45191209844_cd8dc562f8_m.jpg" width="240" height="148" alt="Alberni Fitness" /></a></p> <p>via Soul Ville Community <a href="https://www.soulvillecommunity.com/videos/alberni-fitness-3/" rel="nofollow">www.soulvillecommunity.com/videos/alberni-fitness-3/</a></p>',
    'published': '2018-11-17T01:56:12Z',
    'author': 'nobody@flickr.com ("pattersonwetsublexperve4")',
    'author_id': '154836685@N07',
    'tags': ''
  }, {
    'title': 'DSC_1395.jpg',
    'link': 'https://www.flickr.com/photos/yann2649/45191213504/',
    'media': {'m': 'https://farm5.staticflickr.com/4900/45191213504_0d79a9123c_m.jpg'},
    'date_taken': '2018-06-23T08:56:39-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/yann2649/">yann2649</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/yann2649/45191213504/" title="DSC_1395.jpg"><img src="https://farm5.staticflickr.com/4900/45191213504_0d79a9123c_m.jpg" width="240" height="160" alt="DSC_1395.jpg" /></a></p> ',
    'published': '2018-11-17T01:56:33Z',
    'author': 'nobody@flickr.com ("yann2649")',
    'author_id': '109643782@N02',
    'tags': 'londre'
  }, {
    'title': 'Школа №90, Ярославль',
    'link': 'https://www.flickr.com/photos/146542030@N02/45191214764/',
    'media': {'m': 'https://farm5.staticflickr.com/4812/45191214764_da35525b21_m.jpg'},
    'date_taken': '2018-10-10T16:15:49-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/146542030@N02/">Портал &quot;Экокласс&quot;</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/146542030@N02/45191214764/" title="Школа №90, Ярославль"><img src="https://farm5.staticflickr.com/4812/45191214764_da35525b21_m.jpg" width="240" height="180" alt="Школа №90, Ярославль" /></a></p> ',
    'published': '2018-11-17T01:56:39Z',
    'author': 'nobody@flickr.com ("Портал "Экокласс"")',
    'author_id': '146542030@N02',
    'tags': 'редкие виды'
  }, {
    'title': 'DBIWB.jpg',
    'link': 'https://www.flickr.com/photos/164508194@N04/45865787752/',
    'media': {'m': 'https://farm5.staticflickr.com/4918/45865787752_08cbefea1b_m.jpg'},
    'date_taken': '2018-11-16T17:56:37-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/164508194@N04/">jodi79434</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/164508194@N04/45865787752/" title="DBIWB.jpg"><img src="https://farm5.staticflickr.com/4918/45865787752_08cbefea1b_m.jpg" width="240" height="180" alt="DBIWB.jpg" /></a></p> ',
    'published': '2018-11-17T01:56:37Z',
    'author': 'nobody@flickr.com ("jodi79434")',
    'author_id': '164508194@N04',
    'tags': ''
  }, {
    'title': 'Screenshot_2018-10-30-08-47-13-22',
    'link': 'https://www.flickr.com/photos/77565317@N04/45915091051/',
    'media': {'m': 'https://farm5.staticflickr.com/4849/45915091051_fcda576a04_m.jpg'},
    'date_taken': '2018-11-17T07:26:28-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/77565317@N04/">AJEETSINGHMJONFB</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/77565317@N04/45915091051/" title="Screenshot_2018-10-30-08-47-13-22"><img src="https://farm5.staticflickr.com/4849/45915091051_fcda576a04_m.jpg" width="111" height="240" alt="Screenshot_2018-10-30-08-47-13-22" /></a></p> ',
    'published': '2018-11-17T01:56:28Z',
    'author': 'nobody@flickr.com ("AJEETSINGHMJONFB")',
    'author_id': '77565317@N04',
    'tags': ''
  }, {
    'title': '善福寺川武蔵野橋局ライブカメラ画像. 2018/11/17 10:56',
    'link': 'https://www.flickr.com/photos/157802122@N02/45915093591/',
    'media': {'m': 'https://farm5.staticflickr.com/4901/45915093591_eca82e4e01_m.jpg'},
    'date_taken': '2018-11-17T10:56:44-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/157802122@N02/">River LiveCamera</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/157802122@N02/45915093591/" title="善福寺川武蔵野橋局ライブカメラ画像. 2018/11/17 10:56"><img src="https://farm5.staticflickr.com/4901/45915093591_eca82e4e01_m.jpg" width="240" height="160" alt="善福寺川武蔵野橋局ライブカメラ画像. 2018/11/17 10:56" /></a></p> <p>{&quot;waterLevel&quot;:&quot;0.62&quot;,&quot;date&quot;:&quot;20181117&quot;,&quot;time&quot;:&quot;10:56&quot;}</p>',
    'published': '2018-11-17T01:56:44Z',
    'author': 'nobody@flickr.com ("River LiveCamera")',
    'author_id': '157802122@N02',
    'tags': 'id4545 rivercode8303040049 ym201811 善福寺川 武蔵野橋局 ymd20181117'
  }, {
    'title': 'All photos',
    'link': 'https://www.flickr.com/photos/162156952@N02/45915093621/',
    'media': {'m': 'https://farm5.staticflickr.com/4853/45915093621_c154319553_m.jpg'},
    'date_taken': '2018-11-16T20:56:01-08:00',
    'description': ' <p><a href="https://www.flickr.com/people/162156952@N02/">taydriggers8</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/162156952@N02/45915093621/" title="All photos"><img src="https://farm5.staticflickr.com/4853/45915093621_c154319553_m.jpg" width="221" height="240" alt="All photos" /></a></p> ',
    'published': '2018-11-17T01:56:44Z',
    'author': 'nobody@flickr.com ("taydriggers8")',
    'author_id': '162156952@N02',
    'tags': ''
  }];

  constructor(public httpClient: HttpClient) { }
  public getPublicFeed(): Observable<any> {
    // return this.httpClient.get<any>('https://api.flickr.com/services/feed/photos_public.gne?format=json');
    return of(this.mockedFeed);
  }
}

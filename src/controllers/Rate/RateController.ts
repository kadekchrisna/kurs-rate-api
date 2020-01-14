/* eslint-disable no-console */
import cheerio from 'cheerio';
import {Request, Response} from "express";
import * as axios from 'axios'
import {} from '../../type/vendor'
import moment from 'moment';

export class Rate {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getRate (req:Request, res: Response) : any{
        try {
            axios.get('https://www.bca.co.id/id/Individu/Sarana/Kurs-dan-Suku-Bunga/Kurs-dan-Kalkulator').then((result: { data: string | Buffer; }) => {
                const $ = cheerio.load(result.data);
                console.log($('.kurs-e-rate').html())
                const kursType: any = [];
                let currency: string = '';
                let temp: object = {};
                $('tbody[class="text-right"]').children('tr').children('td').each(function(i, elem) {
                    if (i%7 === 0 || i === 0) {
                        currency = $(this).text()
                        temp[currency] = [];
                        console.log($(this).text())
                    } else if (i >= $('tbody[class="text-right"]').children('tr').children('td').length - 1) {
                        kursType.push(temp)
                    } else {
                        temp[currency].push($(this).text());
                    }
                    // const kurs = $(this).text();
                    // kursType.push(kurs);
                });
                const date = moment().format('YYYY-MM-DD');
                return res.json({data: kursType, date: date});
            });
        } catch (e) {
            console.log(e);
        }
    }
}



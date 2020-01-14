import moment = require("moment");

declare namespace NodeJS{
    interface Global {
        moment: moment
    }
}
/* eslint-disable no-console */
import {app, PORT} from './index'
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
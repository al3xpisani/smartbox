import app from '../src/index'
import 'dotenv/config'

const port = 3005
app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`)
})

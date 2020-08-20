export default class tabContrl extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        const { list } = this.props
        console.log(list)
        return (
            <div>
                {
                    list.map((item, index) => { return (<p >{item}</p>) })
                }
            </div>
        )
    }
}
tabContrl.propTypes = {
    list: PropTypes.array
}
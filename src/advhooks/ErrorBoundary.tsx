import react, {ReactNode , Component} from "react"
import ReactDOM from "react-dom"

type Props = {
    children : ReactNode
}

type State = {
    error : Error | null,

}

class ErrorBoundary extends Component<Props, State> {
    state : State = {
        error : null
    }

    componentDidCatch(error: Error, errorInfo: react.ErrorInfo): void {
        this.setState({ error })
    }
    el = document.createElement('div');

    componentDidMount(): void {
        document.getElementById('page')?.appendChild(this.el);
    }

    componentWillUnmount(): void {
        document.getElementById('page')?.removeChild(this.el);
    }

    render(): react.ReactNode {
        const { error } = this.state;
        const { children } = this.props;

        return  ReactDOM.createPortal( error ? <div id="errorMsg">{error?.message}</div> : children, this.el);
    }

}

export default ErrorBoundary;
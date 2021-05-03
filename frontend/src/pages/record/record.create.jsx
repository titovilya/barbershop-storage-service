import * as React from 'react';

export class RecordCreate extends React.Component {
    state = {
        renderer: {
            ydo: true,
            date: false,
            staff: false,
            time: false,
            client: false,
        },
        fields: {
            ydo: '',
            date: '',
            staff: '',
            time: '',
            client: '',
        }
    }

    renderYdo() {
        return (
            <div class="input-field col s12">
                <select>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label>Materialize Select</label>
            </div>
        );
    }

    renderDate() {
        return (
            <div>date</div>
        );
    }

    renderStaff() {
        return (
            <div>staff</div>
        );
    }

    renderTime() {
        return (
            <div>time</div>
        );
    }

    renderClient() {
        return (
            <div>client</div>
        );
    }

    render() {
        const renderer = this.state.renderer;

        return (
            <div className='container'>
                <form action="option1.php">
                    {renderer.ydo && this.renderYdo()}
                    {renderer.date && this.renderDate()}
                    {renderer.staff && this.renderStaff()}
                    {renderer.time && this.renderTime()}
                    {renderer.client && this.renderClient()}
                    {renderer.ydo && renderer.date && renderer.staff && renderer.time && renderer.client ? (
                        <button onClick={this.onSubmit} className="btn waves-effect waves-light" type="button" name="action">Создать запись</button>
                    ) : (
                            <button onClick={this.onNext} className="btn waves-effect waves-light" type="button" name="action">Далее</button>
                        )}
                </form>
            </div>
        );
    }

    onNext = () => {
        const renderer = this.state.renderer;

        if (renderer.time) {
            renderer.client = true;
            this.setState({ renderer })
            return;
        }
        if (renderer.staff) {
            renderer.time = true;
            this.setState({ renderer })
            return;
        }
        if (renderer.date) {
            renderer.staff = true;
            this.setState({ renderer })
            return;
        }
        if (renderer.ydo) {
            renderer.date = true;
            this.setState({ renderer })
            return;
        }

    }

    onSubmit() {

    }
}

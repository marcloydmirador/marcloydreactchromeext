import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  render() {
    return (
      <header>
        <h1>Real Estate Field Extractor</h1>
		<h5>by Marcloyd M</h5>
		<p><strong>Valid Fields keywords:</strong></p>
		<ul>
			<li>
				Address
			</li>
			<li>
				Price range
			</li>
		</ul>
		<button id="extract">EXTRACT</button>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="Type Field to extract..."
        />
      </header>
    );
  }
}

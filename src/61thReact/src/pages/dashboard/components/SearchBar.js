import React from 'react';

class SearchBar extends React.Component{
    // 상태 관리
    state = {term : '' };
    
    onInputChange = event => {
        this.setState({term : event.target.value});
    }

    // 서밋 이벤트 처리 - 부모 컴포넌트로 부터 콜백 함수 호출
    onFormSubmit1 = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)

    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit1} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
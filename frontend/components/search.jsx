import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      dataList: []
    };
  }

  handleChange() {
    return (e) => {
      this.setState({search: e.target.value});
      let queryList;
      fetch(
        `https://www.reddit.com/api/search_reddit_names.json?query=${e.target.value}`, {
        method: 'post'
      }).then(res => res.json())
        .then(json => this.setState({dataList: json.names}));
    };
  }

  renderDataList() {
    const {dataList} = this.state;
    return dataList.map((subredditName, i) => {
      return <option value={subredditName} key={`option-${i}`}/>;
    });
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      this.setState({search: "", dataList: []});
      this.props.addSubreddit(this.state.search);
      this.props.fetchPostsBySubreddit(this.state.search);
    };
  }

  render() {
    return (
      <div className="search-bar-wrapper h-box flex-center">
        <form>
          <input
            onChange={this.handleChange()}
            type="text"
            className="search-bar"
            list="subreddits"
            value={this.state.search}
            placeholder="Enter Subreddit">
          </input>
          <datalist id="subreddits">
            {this.renderDataList()}
          </datalist>
          <button
            onClick={this.handleSubmit()}
            >
            Add
          </button>
        </form>
      </div>
    );
  }
}

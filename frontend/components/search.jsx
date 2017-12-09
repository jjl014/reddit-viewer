import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      dataList: [],
      error: ""
    };
  }

  handleChange() {
    return (e) => {
      if (this.state.error !== "") this.setState({error: ""});
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
      if (this.state.error !== "") this.setState({error: ""});
      const {dataList, search} = this.state;
      const lowerCaseDataList = dataList.map(el => el.toLowerCase());
      if (lowerCaseDataList.includes(search.toLowerCase())) {
        this.props.addSubreddit(search);
        this.props.fetchPostsBySubreddit(search);
        this.setState({search: "", dataList: []});
      } else {
        this.setState({error: `/r/${this.state.search} doesn't exist`});
      }
    };
  }

  render() {
    return (
      <div className="search-bar-wrapper v-box flex-center">
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
        <h4>{this.state.error}</h4>
      </div>
    );
  }
}

import { MdClose } from "react-icons/md";

const QuickPostCreatePoll = ({
  setPostPullOptions,
  postPullOptions,
  setPostOptionType,
}) => {
  const addOptionHandler = () => {
    const newOptions = [...postPullOptions];
    const newId = postPullOptions[postPullOptions.length - 1].id + 1;
    newOptions.push({ id: newId, value: "" });

    setPostPullOptions(newOptions);
  };

  const optionValueHandler = (e, index) => {
    const newOptions = [...postPullOptions];
    newOptions[index].value = e.target.value;
    setPostPullOptions(newOptions);
  };

  const removeOptionHandler = (id) => {
    const newOptions = postPullOptions.filter((item) => item.id !== id);
    setPostPullOptions(newOptions);
  };

  return (
    <div className="quick-post-create-poll">
      <div className="post-option-header">
        <h3 className="post-option-header-title">Create Pull</h3>

        <button
          className="post-option-cancel-btn"
          onClick={() => {
            setPostOptionType("normal");
          }}
        >
          <MdClose />
        </button>
      </div>

      <div className="quick-post-create-poll-body">
        {postPullOptions.map((option, index) => (
          <div className="pull-option-container" key={index}>
            <input
              type="text"
              className="option-input small"
              placeholder={`Option ${index + 1}`}
              value={option.value}
              onChange={(e) => optionValueHandler(e, index)}
            />

            {index > 1 && (
              <button
                className="remove-option-btn"
                onClick={() => removeOptionHandler(option.id)}
              >
                <span>X</span>
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="quick-post-create-poll-footer">
        <button className="button primary small" onClick={addOptionHandler}>
          <span>+</span> Add Option
        </button>
      </div>
    </div>
  );
};

export default QuickPostCreatePoll;

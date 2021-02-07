import './App.css';
import Button from '@material-ui/core/Button'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4081',
      contrastText: '#fff',
    }
  },
});

const data = [
  {
    content: "「やっぱり、家がええわ」。病院で外泊を許可されて帰ってきた<b><u>男性</u></b>が言った。大腸がんで残された時間は長くない。そう診断され入院したが、家族も本人の希望をかなえたいと、外泊を機に自宅で療養することにした▼岡山、倉敷市で訪問診療専門のクリニックを営む中村幸伸医師（４３）の著書「畳の上で死にたい」にある患者の一人だ。大工だった男性が自分で建てた思い入れのある家で、６５歳の時に仕事を辞めてからは裏の畑で野菜を世話するのが日課になっていた",
    questions: [
      { 
        id: 1,
        question: "<b>下線部「男性」</b>は<b>何の仕事をしていた人ですか</b>。本文中から適切な言葉を選択しましょう。",
        answer: "大工"
      },
      {
        id: 2,
        question: "<b>下線部「男性」</b>は<b>何歳で仕事を辞めましたか</b>。本文中から適切な言葉を選択しましょう。",
        answer: "６５歳"
      }
    ]
  }
];

const App = () => {

  const handleBtn = (id) => {
    const selectedText = window.getSelection().toString();

    if (!selectedText) {
      alert("選択されていません");
      return;
    } else if (selectedText === data[0].questions[id-1].answer) {
      alert("正解！");
      window.getSelection().removeAllRanges();
    } else {
      alert("残念！");
    };
  };

  return (
    <div className="main">
      <h1>どくトレ！</h1>
      <p>★ 次の文章を読んで、後の問いに答えましょう。</p>
      <p className="content" dangerouslySetInnerHTML={{ __html: data[0].content}} />
      <hr color="#ff4081"/>
      {data[0].questions.map((q, index) => {
        return (
          <div>
            <div className="q-area">
              <h3>問 {q.id}</h3>
              <p dangerouslySetInnerHTML={{ __html: q.question}} />
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" onClick={() => handleBtn(q.id)} key={index.toString()}>解答する</Button>
              </ThemeProvider>
            </div>
            <hr color="#ff4081"/>
          </div>
        )
      })}
    </div>
  );
};

export default App;

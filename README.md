# 🦁 멋쟁이 사자처럼 10기 FE 2주차 과제 🦁
<<<<<<< HEAD

- React 강의 이후 첫 과제입니다. React에서 styled component와 관련된 개념을 활용하여 해결할 수 있는 과제였습니다.

# ❓ 실습 1번문제

Text Component를 수정하여 재사용이 가능하도록 아래와 같이 구현하여라.

### ⭐ 제한조건

- text-weight , text-size 를 props를 통해서 입력받아서 수정

=======
- React 강의 이후 첫 과제입니다. React에서 styled component와 관련된 개념을 활용하여 해결할 수 있는 과제였습니다.

# ❓ 실습 1번문제
 Text Component를 수정하여 재사용이 가능하도록 아래와 같이 구현하여라.

### ⭐ 제한조건 
 - text-weight , text-size 를 props를 통해서 입력받아서 수정
 
>>>>>>> master
ex) <br>
<img width="538" alt="image" src="https://user-images.githubusercontent.com/77886826/166138795-c60b1f82-9cd7-47fb-835a-04c6e0a4b02b.png"><br>
초기 상태<br>

<img width="663" alt="image" src="https://user-images.githubusercontent.com/77886826/166138831-708166b3-5251-4956-ba19-f617085ce97e.png"><br>
다음과 같이 입력받을 때 font-weight, font-size 등이 수정되도록 변경할 것<br>

## 🔥 Solution
<<<<<<< HEAD

**Styled Component**를 활용하여 **React Component**에서 전달받은 `props`로 가변 스타일링이 가능합니다.

**Styled Component**를 사용하기 위해서는 `styled-components` 패키지에서 `styled` 함수를 import해야합니다.

```javascript
import styled from "styled-components";
```

**Styled Component**는 아래와 같이 선언할 수 있으며, 전달받은 `props`의 값에 따라 바뀔 수 있도록 **삼항 연산자**로 작성해주었습니다.

```javascript
const StyledText = styled.div`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24")}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
`;
```

위와 같이 작성한 **삼항 연산자**는 **단축 평가 (Short circuit evaluation)** 방식으로 아래와 같이 더 간결하게 표현이 가능합니다.

```javascript
const StyledText = styled.div`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "24"}px;
  font-weight: ${(props) => props.fontWeight || "400"};
`;
```

이렇게 생성한 **Styled Component**를 아래와 같이 **React Component**를 작성하여 사용할 수 있습니다.

```javascript
const TextBox = (props) => {
  return (
    <StyledText
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
    >
      {props.children}
    </StyledText>
  );
};
```

이는 `App.js`에 다음과 같이 작성해 사용할 수 있습니다.

```javascript
<TextBox color="red">"hihi"</TextBox>
<TextBox color="blue" fontWeight="400" fontSize="300">
"hihi"
</TextBox>
```

- 첫 번째는 color만 인자로 넘겨준 경우에 해당
- 두 번째는 color와 fontWeight, fontSize를 인자로 넘겨준 경우에 해당
  이에 대한 결과는 아래와 같습니다.
  ![image](https://user-images.githubusercontent.com/79556112/174468400-f4d10939-ac8b-4523-baa4-b89f1d4d4091.png)

# ❓ 실습 2번문제

색상코드를 입력하면 색상과 text가 나오는 카드를 만들어라. 제한된 조건 속에서 진행할 것.

![image](https://user-images.githubusercontent.com/79556112/174468877-e0642033-55ee-492c-a1b7-02b3e30df9eb.png)
<br>초기 사진. 아래와 같이 작동하도록 작성할 것.

### ⭐ 목표)

=======
**Styled Component**를 활용하여 **React Component**에서 전달받은 `props`로 가변 스타일링이 가능합니다.
 
**Styled Component**를 사용하기 위해서는 `styled-components` 패키지에서 `styled` 함수를 import해야합니다.
```javascript
import styled from "styled-components";
```
 
**Styled Component**는 아래와 같이 선언할 수 있으며, 전달받은 `props`의 값에 따라 바뀔 수 있도록 **삼항 연산자**로 작성해주었습니다.
```javascript
const StyledText = styled.div`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24")}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
`;
```

위와 같이 작성한 **삼항 연산자**는 **단축 평가 (Short circuit evaluation)** 방식으로 아래와 같이 더 간결하게 표현이 가능합니다.
```javascript
const StyledText = styled.div`
  color: ${(props) => (props.color || "black")};
  font-size: ${(props) => (props.fontSize || "24")}px;
  font-weight: ${(props) => (props.fontWeight || "400")};
`;
```

이렇게 생성한 **Styled Component**를 아래와 같이 **React Component**를 작성하여 사용할 수 있습니다.
```javascript
const TextBox = (props) => {
  return (
    <StyledText
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
    >
      {props.children}
    </StyledText>
  );
};
```

이는 `App.js`에 다음과 같이 작성해 사용할 수 있습니다.
```javascript
<TextBox color="red">"hihi"</TextBox>
<TextBox color="blue" fontWeight="400" fontSize="300">
"hihi"
</TextBox>
```
- 첫 번째는 color만 인자로 넘겨준 경우에 해당
- 두 번째는 color와 fontWeight, fontSize를 인자로 넘겨준 경우에 해당
이에 대한 결과는 아래와 같습니다.
![image](https://user-images.githubusercontent.com/79556112/174468400-f4d10939-ac8b-4523-baa4-b89f1d4d4091.png)


# ❓ 실습 2번문제 
 색상코드를 입력하면 색상과 text가 나오는 카드를 만들어라. 제한된 조건 속에서 진행할 것.
 
![image](https://user-images.githubusercontent.com/79556112/174468877-e0642033-55ee-492c-a1b7-02b3e30df9eb.png)
<br>초기 사진. 아래와 같이 작동하도록 작성할 것.

 ### ⭐ 목표)
>>>>>>> master
<img width="335" alt="image" src="https://user-images.githubusercontent.com/77886826/166140718-0a4599f1-6b4b-4048-8239-685a207fc5f1.png">
<img width="396" alt="image" src="https://user-images.githubusercontent.com/77886826/166140696-26ece472-220b-450f-90cf-37ac346ee8de.png">
<br>위와 같이 입력받음.

<<<<<<< HEAD
### ⭐ 제한조건

- ColorCard들 사이 간격은 10px
- ColorCard를 서로다른 props를 통해서 5개 이상 화면에 출력

## 🔥 Solution

우선 새로 **ColorCard component directory**를 생성, 내부에 `index.js`를 생성하고, 내부에 **ColorCard 전체를 감싸는 Styled Component**와 **내부에 색상 코드에 따른 색상을 표현할 Styled Component**를 작성합니다.

```javascript
const CardWrapper = styled.div`
  width: 300px;
  height: 430px;
  border: 1px black solid;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0px;
  overflow: hidden;
  text-align: center;
`;

const ColorWrapper = styled.div`
  width: 300px;
  height: 350px;
  margin: 0px;
  border: 1px solid black;
  background-color: ${(props) => props.color || "white"};
`;
```

가장 바깥을 담당할 component에는 모서리에 곡률을 주기 위해 `border-radius`를 추가해주었으며, 안에 담길 요소의 크기가 더 크더라도 border 바깥으로 표시되지 않도록 `overflow: hidden;`을 추가해주었습니다.

내부에 색상을 표현할 component는 `background-color`를 `props`로 전달받아 색상 코드에 따라 표현하도록 작성하였습니다. (default value는 'white'로 지정)

**React Component**에는 아래와 같이 위에서 작성한 **Styled Component**와 더불어 1번 문제에서 작성한 `Text` component를 활용하여, **Textbox에 전달해준 색상 코드값으로 Text Color와 `ColorWarppe`r의 `background-color`까지 지정**하도록 하였습니다.

```javascript
<ColorCard color="black" />
<ColorCard color="#1E82CD" />
<ColorCard color="#FFAAFF" />
```

`App.js`에서는 위와 같이 사용하였으며, 이에 대한 결과는 아래와 같습니다.

![image](https://user-images.githubusercontent.com/79556112/174469163-a3793ea3-6e4c-4ba3-9e47-86ef5e24a010.png)

# ❓ 실습 3번문제

MediaCard 컴포넌트를 제작하여라.
아래 사진과 최대한 유사하도록 컴포넌트를 제작하여라.<br>

 <img width="668" alt="image" src="https://user-images.githubusercontent.com/77886826/166138976-2db612eb-7b7a-4a7c-882a-3199b9d55ab7.png">

### ⭐ 제한조건

- styled-component 를 이용
- 사진의 1번은 url을 props 로 입력받음
- 사진의 2번은 미디어카드의 제목입니다. props를 통해 입력받음
- 사진의 3번은 미디어 카드의 내용입니다. props를 통해 입력받음
- 사진의 4번은 미디어 카드의 버튼의 색 입니다. props를 통해 입력받음
- 서로 다른 props를 입력받은 미디어 카드를 최소 5개 이상 작성할 것
=======
### ⭐ 제한조건 
 - ColorCard들 사이 간격은 10px
 - ColorCard를 서로다른 props를 통해서 5개 이상 화면에 출력

## 🔥 Solution

우선 새로 **ColorCard component directory**를 생성, 내부에 `index.js`를 생성하고, 내부에 **ColorCard 전체를 감싸는 Styled Component**와 **내부에 색상 코드에 따른 색상을 표현할 Styled Component**를 작성합니다.

```javascript
const CardWrapper = styled.div`
  width: 300px;
  height: 430px;
  border: 1px black solid;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0px;
  overflow: hidden;
  text-align: center;
`;

const ColorWrapper = styled.div`
  width: 300px;
  height: 350px;
  margin: 0px;
  border: 1px solid black;
  background-color: ${(props) => (props.color || "white")};
`;
```
가장 바깥을 담당할 component에는 모서리에 곡률을 주기 위해 `border-radius`를 추가해주었으며, 안에 담길 요소의 크기가 더 크더라도 border 바깥으로 표시되지 않도록 `overflow: hidden;`을 추가해주었습니다.

내부에 색상을 표현할 component는 `background-color`를 `props`로 전달받아 색상 코드에 따라 표현하도록 작성하였습니다. (default value는 'white'로 지정)

**React Component**에는 아래와 같이 위에서 작성한 **Styled Component**와 더불어 1번 문제에서 작성한 `Text` component를 활용하여, **Textbox에 전달해준 색상 코드값으로 Text Color와 `ColorWarppe`r의 `background-color`까지 지정**하도록 하였습니다.


```javascript
<ColorCard color="black" />
<ColorCard color="#1E82CD" />
<ColorCard color="#FFAAFF" />
```

`App.js`에서는 위와 같이 사용하였으며, 이에 대한 결과는 아래와 같습니다.

![image](https://user-images.githubusercontent.com/79556112/174469163-a3793ea3-6e4c-4ba3-9e47-86ef5e24a010.png)


# ❓ 실습 3번문제
 MediaCard 컴포넌트를 제작하여라.
 아래 사진과 최대한 유사하도록 컴포넌트를 제작하여라.<br>
 
 <img width="668" alt="image" src="https://user-images.githubusercontent.com/77886826/166138976-2db612eb-7b7a-4a7c-882a-3199b9d55ab7.png">

### ⭐ 제한조건 
 - styled-component 를 이용
 - 사진의 1번은 url을 props 로 입력받음
 - 사진의 2번은 미디어카드의 제목입니다. props를 통해 입력받음
 - 사진의 3번은 미디어 카드의 내용입니다. props를 통해 입력받음
 - 사진의 4번은 미디어 카드의 버튼의 색 입니다. props를 통해 입력받음
 - 서로 다른 props를 입력받은 미디어 카드를 최소 5개 이상 작성할 것
>>>>>>> master

## 🔥 Solution

우선 새로 **MediaCard component directory**를 생성, 내부에 `index.js`를 생성하고, 내부에 **MediaCard 전체를 감싸는 Styled Component**와 **상단의 image를 담을 Styled Component**를 작성합니다.

```javascript
const CardWrapper = styled.div`
  width: 350px;
  height: 393px;
  border-radius: 20px;
  text-align: center;
  background-color: white;
  box-shadow: 0px 0px 50px 1px rgba(0, 0, 0, 0.3);
  display: block;
  margin: 50px;
  padding-bottom: 12.5px;
`;

const ImageBox = styled.img`
  width: 328px;
  height: 197px;
  border-radius: 23px;
  margin-top: 9px;
  margin-bottom: 0px;
  overflow: hidden;
`;
```
<<<<<<< HEAD

예시 이미지에 card 뒤로 그림자가 있었으므로, 이를 위해 `box-shadow`와 곡률을 주기 위해 `border-radius`를 추가해줍니다.

=======
예시 이미지에 card 뒤로 그림자가 있었으므로, 이를 위해 `box-shadow`와 곡률을 주기 위해 `border-radius`를 추가해줍니다.
 
>>>>>>> master
이미지 하단에 Text를 넣기 위해서 **Text title에 해당하는 Styled Component**와 **text를 담을 Styled Component**를 작성합니다.

```javascript
const TitleBox = styled.p`
  width: 325px;
  height: 42px;
  border-radius: 20px;
  margin: 10px;
  margin-bottom: 0px;
  padding-left: 10px;
  text-align: left;
  color: #2e2e2e;
  font-size: 27px;
  font-weight: bold;
`;

const TextBox = styled.p`
  width: 325px;
  height: 48px;
  border-radius: 20px;
  margin: 10px;
  margin-top: 0px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  font-weight: 200;
  color: #2e2e2e;
  font-size: 20px;
`;
```

Text 하단에 있는 버튼을 위해 **Button을 감쌀 Styled Component**와 **Button Styled Component**를 작성합니다.

```javascript
const ButtonWrap = styled.div`
  width: 328px;
  height: 52px;
  background-color: ${(props) => props.color || "#4872E4"};
  border-radius: 20px;
  margin: 12.5px;
  margin-top: 30px;
  line-height: 50px;
  color: white;
  display: flex;
  overflow: hidden;
`;

const Button = styled.button`
  width: 328px;
  height: 52px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.3)
  );
  border: none;
  line-height: 50px;
  color: white;
  font-size: 19px;
`;
```
<<<<<<< HEAD

Button을 두 개의 Component로 나누어서 작성한 이유는 그라데이션 효과를 주기 위함입니다. `ButtonWrap` component는 Button의 색상을 표현하며, `Button` component는 Button 위에 그라데이션을 표현합니다. `linear-gradient`를 이용하여 오른쪽으로 갈 수록 밝아지도록 작성하였습니다.

위에서 작성한 **Styled Component**를 **React Component**에 아래와 같이 작성하여 사용합니다.

```javascript
const MediaCard = (props) => {
  return (
    <CardWrapper>
      <ImageBox src={props.url || "./mediacard_default_img.png"}></ImageBox>
      <TitleBox>{props.heading || "Heading"}</TitleBox>
      <TextBox>
        {props.text || "This is a short description about the card."}
      </TextBox>
      <ButtonWrap color={props.color}>
        <Button>Action</Button>
      </ButtonWrap>
    </CardWrapper>
  );
};
```

각 `props` 값은 값을 넘겨받지 않았을 경우에 넘겨줄 기본 값을 지정해주기 위해 **삼항 연산자**를 이용하여 작성하였습니다. 이는 `App.js`에서 아래와 같은 form으로 사용하였습니다.

```javascript
<MediaCard />
<MediaCard
 color="red"
 url="https://miro.medium.com/max/3600/0*n-2bW82Z6m6U2bij.jpeg"
 heading="CODING CAT"
 text="Oh, he is JUST coding!! How adorable!!"
/>
```
=======
Button을 두 개의 Component로 나누어서 작성한 이유는 그라데이션 효과를 주기 위함입니다. `ButtonWrap` component는 Button의 색상을 표현하며, `Button` component는 Button 위에 그라데이션을 표현합니다. `linear-gradient`를 이용하여 오른쪽으로 갈 수록 밝아지도록 작성하였습니다.

위에서 작성한 **Styled Component**를 **React Component**에 아래와 같이 작성하여 사용합니다.

```javascript
const MediaCard = (props) => {
  return (
    <CardWrapper>
      <ImageBox src={props.url || "./mediacard_default_img.png"}></ImageBox>
      <TitleBox>{props.heading || "Heading"}</TitleBox>
      <TextBox>
        {props.text || "This is a short description about the card."}
      </TextBox>
      <ButtonWrap color={props.color}>
        <Button>Action</Button>
      </ButtonWrap>
    </CardWrapper>
  );
};
```

각 `props` 값은 값을 넘겨받지 않았을 경우에 넘겨줄 기본 값을 지정해주기 위해 **삼항 연산자**를 이용하여 작성하였습니다. 이는 `App.js`에서 아래와 같은 form으로 사용하였습니다.

```javascript
<MediaCard />
<MediaCard
 color="red"
 url="https://miro.medium.com/max/3600/0*n-2bW82Z6m6U2bij.jpeg"
 heading="CODING CAT"
 text="Oh, he is JUST coding!! How adorable!!"
/>
```

이에 대한 결과는 아래와 같습니다.

![image](https://user-images.githubusercontent.com/79556112/174470018-e57fbc97-a7bd-4307-8294-6f2328407776.png)
>>>>>>> master

이에 대한 결과는 아래와 같습니다.

![image](https://user-images.githubusercontent.com/79556112/174470018-e57fbc97-a7bd-4307-8294-6f2328407776.png)

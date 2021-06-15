import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const Home = () => {
  return(
  <div>
    <Head>
      <title>me</title>
    </Head>
    <Container>
      <ImageWrapper>
        <Image src="/icon-m.png" width={250} height={250} alt=""/>
      </ImageWrapper>
      <Wrapper>
        <H2>me</H2>
      </Wrapper>
        <p>名古屋のベンチャー企業でフロントエンドエンジニアしてます。</p>
        <p>美味しいラーメン食べたい。</p>
      <Wrapper>
        <H2>skill</H2>
        <p>主にJavaScriptに関する技術に触れています。</p>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>NodeJS</li>
          <li>ReactNative</li>
          <li>Flutter</li>
        </ul>
      </Wrapper>
      <Wrapper>
        <H2>links</H2>
        <p><a href="https://twitter.com/yun8boo">twitter</a></p>
        <p><a href="https://www.facebook.com/yun8boo/">facebook</a></p>
        <p><a href="https://github.com/yun8boo">github</a></p>
      </Wrapper>
      <Wrapper>
        <H2>contact</H2>
        <a href="mailto:yun8boo@gmail.com"><p>yun8boo@gmail.com</p></a>
      </Wrapper>
    </Container>
  </div>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

const Wrapper = styled.div`
  margin-top: 20px;
`

const StyledImage = styled(Image)`
  border-radius: 50%;
  width: 50%;
`

const H2 = styled.h2`
  margin-bottom: 10px;
  border-left: 5px solid #3578e5;
  padding-left: 10px;
`

const P = styled.p`
  word-wrap:break-word;
`
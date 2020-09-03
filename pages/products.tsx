import Head from 'next/head'
import styled from 'styled-components'
// import components
import Tag from '../components/Tag'
import H2 from '../components/styled-html-tag/H2'

const Products = () => {
  return(
  <div>
    <Head>
      <title>products</title>
      <link rel='icon' href='/static/favicon_me.ico' />
    </Head>
    <Container>
      <Wrapper>
        <H2Wrapper>
          <H2 title='Wanago' />
        </H2Wrapper>
        <div>
          <Tag title='ReactNative' />
          <Tag title='TypeScript' />
          <Tag title='Redux' />
        </div>
        <ImageWrapper>
          <Image src="/static/wanago_m.png" alt=""/>
        </ImageWrapper>
        <P>お店選びで迷った時に周辺の飲食店を表示してくれるアプリ</P>
        <P>ios: <a href="https://apps.apple.com/jp/app/wanago/id1509016873">https://apps.apple.com/jp/app/wanago/id1509016873</a></P>
      </Wrapper>
      <Wrapper>
        <H2Wrapper>
          <H2 title='TOGO' />
        </H2Wrapper>
        <div>
          <Tag title='ReactNative' />
          <Tag title='TypeScript' />
          <Tag title='Redux' />
          <Tag title='Firestore' />
        </div>
        <ImageWrapper>
          <Image src="/static/black_icon.png" alt=""/>
        </ImageWrapper>
        <P>カフェに特化したモバイルオーダーペイアプリ</P>
        <P>日本経済新聞に掲載されました</P>
        <P><a href="https://www.nikkei.com/article/DGKKZO48987840W9A820C1KNTP00/">https://www.nikkei.com/article/DGKKZO48987840W9A820C1KNTP00/</a></P>
        <P>現在サービス終了</P>
      </Wrapper>
    </Container>
  </div>
  )
}

export default Products

const Container = styled.div`
  width: 100%;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`

const Image = styled.img`
  width: 50%;
`

const H2Wrapper = styled.div`
  margin-bottom: 10px;
`

const P = styled.p`
  word-wrap:break-word;
`
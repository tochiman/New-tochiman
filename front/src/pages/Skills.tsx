import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Grid from '@mui/material/Grid';
import Header from '../components/Header'
import Card from '../components/Card'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Home() {
  return (
    <>
        <Head>
            <title>tochiman</title>
            <meta name="description" content="tochimanに関する情報などを載せてるサイトです" />
            <link rel="icon" href="favicon.ico" />
        </Head>
        <Header />

        <div className={styles.main}>
            <div className={styles.skilltitle}>
                <ArrowForwardIosIcon sx={{width: '40px'}}/>
                <p>Using Language</p>
            </div>
            <div className={styles.langcard}>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='python.svg'
                            title="Python" 
                            description="主に、API操作(Google, discordのようなサービスに対して...)や定期実行するようなプログラムなど、を書く際に使用しています。"
                            imgHeight={255}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='typescript-icon.svg'
                            title="TypeScript" 
                            description="主にWebアプリケーション開発をする際にフロントエンドで使用する言語。今開発しているものはすべてTypeScriptで行なっている。"
                            imgHeight={256}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='javascript.svg'
                            title="JavaScript" 
                            description="主にWebアプリケーション開発をする際にフロントエンドで使用する言語。けれども最近はTypeScriptに移行したため使用していない。"
                            imgHeight={256}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='go.svg'
                            title="Go" 
                            description="バックエンド開発(API開発)をする際は全部Goでやっている。最近だとAPIだけでなくOneTimePasswordの際も使用した。"
                            imgHeight={146}
                            imgWidth={389}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='c.svg'
                            title="C" 
                            description="授業で勉強した程度にしかスキルがありません。そのため、C言語を使った何らかの開発をしたことがない"
                            imgHeight={288}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='mysql.svg'
                            title="MySQL" 
                            description="バックエンドでデーターベースを使う際によく使用しています。ただし、基本的にはGoのORM経由でいじることが多いです。"
                            imgHeight={349}
                            imgWidth={512}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='html-5.svg'
                            title="HTML" 
                            description="昔はバニラでHTMLをいじっていたこともありました。"
                            imgHeight={361}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='css-3.svg'
                            title="CSS" 
                            description="CSSは最近もWebアプリケーションを開発する際にちょくちょくいじったりしています。ただし、細かいところは理解していません。"
                            imgHeight={361}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='sass.svg'
                            title="Sass" 
                            description="たまにSassで整えたりしていますが、基本的にはCSSでやってしまうことが多いです。理解度もそこまでは高いとは思えないです。"
                            imgHeight={192}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='markdown.svg'
                            title="Markdown" 
                            description="開発したものの説明書や仕様書、ZennやHackMDといったサービスで使用したりすることが多い。"
                            imgHeight={158}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='yaml.svg'
                            title="Yaml" 
                            description="DockerやNetplanの設定ファイルを書く際に主に使用しています。"
                            imgHeight={176}
                            imgWidth={512}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='json.svg'
                            title="Json" 
                            description="APIの結果にJsonを用いたりすることが多い。"
                            imgHeight={256}
                            imgWidth={256}
                        />
                    </Grid>
                </Grid>
            </div>
            <div className={styles.skilltitle}>
                <ArrowForwardIosIcon sx={{width: '40px'}}/>
                <p>Using Library or Framework</p>
            </div>
            <div className={styles.langcard}>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='material-ui.svg'
                            title="Material UI" 
                            description="Next.jsでコンポーネントを使用したいときは、基本はここから持ってきている。シンプルで好き。"
                            imgHeight={222}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='nextjs-icon.svg'
                            title="Next.js" 
                            description="Webアプリケーションを作る際に使用するフレームワーク。基本的なことはできる。"
                            imgHeight={256}
                            imgWidth={256}
                        />
                    </Grid>
                </Grid>
            </div>
            <div className={styles.skilltitle}>
                <ArrowForwardIosIcon sx={{width: '40px'}}/>
                <p>Using Technology</p>
            </div>
            <div className={styles.langcard}>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='cloudflare.svg'
                            title="Cloudflare" 
                            description="トンネルを掘ったりすることに使ったり、本Webページも自宅サーバーをトンネリングして公開している。一方で、ドメイン管理やDNSの管理、EmailRoutingもしたりしている。"
                            imgHeight={116}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='git-icon.svg'
                            title="Git" 
                            description="どのプロジェクトもGitを使って管理するように心がけています。基本的には、Githubの方へプッシュしたりします。"
                            imgHeight={256}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='docker-icon.svg'
                            title="Docker" 
                            description="最近の開発はすべて、Dockerで開発しています。マルチステージングビルドを用いて本番環境への移行を行ったりしています。"
                            imgHeight={185}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='kubernetes.svg'
                            title="Kubernetes" 
                            description="実際に運用したことは、まだありませんがデプロイやPodを建てたりした経験はあります。また、構築をやったこともあります。"
                            imgHeight={249}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='ubuntu.svg'
                            title="Ubuntu" 
                            description="自宅サーバーで動かしているProxmoxのVMのOSは基本これを使っている。"
                            imgHeight={256}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='visual-studio-code.svg'
                            title="Visual Studio Code" 
                            description="普段コードを書くときは、全部これ。Visual Studio Codeが一番いい。"
                            imgHeight={254}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='vim.svg'
                            title="Vim" 
                            description="リモート先のサーバーとかはVimで操作することが多い。メインのサーバーにはVimを入れてこれで開発することが多い。"
                            imgHeight={257}
                            imgWidth={256}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card 
                            image='vagrant-icon.svg'
                            title="Vagrant" 
                            description="最近知って、少しずつ触り始めてる。便利かも。でも設定ファイルの書き方はあんまり好きじゃない。"
                            imgHeight={266}
                            imgWidth={256}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    </>
  )
}
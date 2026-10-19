# 第18周：练习答案

## 极限与连续

### 选择题
1. **答案：B**
   解析：当$x\to 0$时，$\sin 3x\sim 3x$，$\tan 2x\sim 2x$，所以$\lim\limits_{x\to 0}\dfrac{\sin 3x}{\tan 2x}=\lim\limits_{x\to 0}\dfrac{3x}{2x}=\dfrac{3}{2}$

2. **答案：B**
   解析：$\lim\limits_{x\to\infty}\left(1+\dfrac{2}{x}\right)^x=\lim\limits_{x\to\infty}\left[\left(1+\dfrac{2}{x}\right)^{x/2}\right]^2=e^2$，利用第二个重要极限$\lim\limits_{u\to\infty}\left(1+\dfrac{1}{u}\right)^u=e$

### 填空题
1. **答案：$\dfrac{1}{2}$**
   解析：这是$\dfrac{0}{0}$型极限，用洛必达法则：$\lim\limits_{x\to 0}\dfrac{e^x-1-x}{x^2}=\lim\limits_{x\to 0}\dfrac{e^x-1}{2x}=\lim\limits_{x\to 0}\dfrac{e^x}{2}=\dfrac{1}{2}$

### 解答题
1. **解**：将分子因式分解为$\tan x-\sin x=\tan x(1-\cos x)$，当$x\to 0$时，$\tan x\sim x$，$1-\cos x\sim\dfrac{x^2}{2}$，所以
$$\lim_{x\to 0}\frac{\tan x-\sin x}{x^3}=\lim_{x\to 0}\frac{\tan x(1-\cos x)}{x^3}=\lim_{x\to 0}\frac{x\cdot\frac{x^2}{2}}{x^3}=\frac{1}{2}$$

2. **解**：
   - **连续性**：当$x\to 0$时，$\left|x^2\sin\dfrac{1}{x}\right|\le x^2\to 0=f(0)$，由夹逼定理$\lim\limits_{x\to 0}f(x)=f(0)=0$，故$f(x)$在$x=0$处连续。
   - **可导性**：用导数定义，
$$f'(0)=\lim_{h\to 0}\frac{f(0+h)-f(0)}{h}=\lim_{h\to 0}\frac{h^2\sin\frac{1}{h}}{h}=\lim_{h\to 0}h\sin\frac{1}{h}=0$$
     （无穷小$h$乘有界函数$\sin\dfrac{1}{h}$仍为无穷小），故$f(x)$在$x=0$处可导且$f'(0)=0$。

## 导数与求导法则

### 选择题
1. **答案：B**
   解析：由复合函数求导法则，$y'=\dfrac{1}{\sin x}\cdot(\sin x)'=\dfrac{\cos x}{\sin x}=\cot x$

2. **答案：B**
   解析：幂指函数用对数求导法：两边取对数得$\ln y=\sin x\cdot\ln x$，两边对$x$求导得$\dfrac{y'}{y}=\cos x\ln x+\dfrac{\sin x}{x}$，所以$y'=x^{\sin x}\left(\cos x\ln x+\dfrac{\sin x}{x}\right)$

### 填空题
1. **答案：$-e^{-2x}(2\cos 3x+3\sin 3x)$**
   解析：由乘积法则，$y'=(-2e^{-2x})\cos 3x+e^{-2x}(-3\sin 3x)=-2e^{-2x}\cos 3x-3e^{-2x}\sin 3x$

### 解答题
1. **解**：方程$e^y+xy-e=0$两边对$x$求导（$y$是$x$的函数）：
$$e^y\frac{dy}{dx}+y+x\frac{dy}{dx}=0$$
   解得$\dfrac{dy}{dx}=-\dfrac{y}{e^y+x}$。
   当$x=0$时，原方程为$e^y-e=0$，得$y=1$，所以$\left.\dfrac{dy}{dx}\right|_{x=0}=-\dfrac{1}{e}$

2. **解**：$\dfrac{dx}{dt}=1-\cos t$，$\dfrac{dy}{dt}=\sin t$，所以
$$\frac{dy}{dx}=\frac{\sin t}{1-\cos t}$$
   二阶导数：
$$\frac{d^2y}{dx^2}=\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}=\frac{\frac{\cos t(1-\cos t)-\sin t\cdot\sin t}{(1-\cos t)^2}}{1-\cos t}=\frac{\cos t-1}{(1-\cos t)^3}=-\frac{1}{(1-\cos t)^2}$$

## 导数应用

### 选择题
1. **答案：A**
   解析：$f'(x)=3x^2-3=0$得驻点$x=\pm 1$。$f''(x)=6x$，$f''(-1)=-6<0$，故$x=-1$为极大值点，极大值$f(-1)=-1+3=2$

2. **答案：C**
   解析：由$\lim\limits_{x\to 1}\dfrac{x^2}{x-1}=\infty$知垂直渐近线为$x=1$；作多项式除法：$\dfrac{x^2}{x-1}=x+1+\dfrac{1}{x-1}$，当$x\to\infty$时$\dfrac{1}{x-1}\to 0$，故斜渐近线为$y=x+1$；又$x\to\infty$时$f(x)\to\infty$，无水平渐近线

### 填空题
1. **答案：$(1,-1)$**
   解析：$y'=3x^2-6x$，$y''=6x-6$，令$y''=0$得$x=1$；$x<1$时$y''<0$，$x>1$时$y''>0$，二阶导数变号，故拐点为$(1, f(1))=(1,-1)$

2. **答案：$0$**
   解析：$f'(x)=1-\dfrac{1}{1+x}=\dfrac{x}{1+x}\ge 0$在$[0,2]$上恒成立，$f(x)$单调递增，故最小值在左端点取得：$f(0)=0$

### 解答题
1. **解**：$f'(x)=3x^2-6x-9=3(x-3)(x+1)$，令$f'(x)=0$得$x=-1$和$x=3$。
   - 当$x<-1$时，$f'(x)>0$，单调递增；
   - 当$-1<x<3$时，$f'(x)<0$，单调递减；
   - 当$x>3$时，$f'(x)>0$，单调递增。
   
   所以增区间为$(-\infty,-1)$和$(3,+\infty)$，减区间为$(-1,3)$；极大值$f(-1)=-1-3+9+5=10$，极小值$f(3)=27-27-27+5=-22$

## 积分方法

### 选择题
1. **答案：B**
   解析：套用公式$\int\dfrac{1}{a^2+x^2}dx=\dfrac{1}{a}\arctan\dfrac{x}{a}+C$，取$a=2$得$\int\dfrac{dx}{x^2+4}=\dfrac{1}{2}\arctan\dfrac{x}{2}+C$

### 填空题
1. **答案：$\dfrac{1}{2}(\ln x)^2+C$**
   解析：凑微分$\dfrac{\ln x}{x}dx=\ln x\,d(\ln x)$，所以$\int\dfrac{\ln x}{x}dx=\int\ln x\,d(\ln x)=\dfrac{1}{2}(\ln x)^2+C$

### 解答题
1. **解**：令$t=\sqrt{x}$，则$x=t^2$，$dx=2t\,dt$，
$$\int\frac{dx}{1+\sqrt{x}}=\int\frac{2t}{1+t}dt=2\int\left(1-\frac{1}{1+t}\right)dt=2t-2\ln(1+t)+C=2\sqrt{x}-2\ln(1+\sqrt{x})+C$$

2. **解**：用分部积分法，令$u=x$，$dv=e^{2x}dx$，则$du=dx$，$v=\dfrac{1}{2}e^{2x}$，
$$\int xe^{2x}dx=\frac{x}{2}e^{2x}-\frac{1}{2}\int e^{2x}dx=\frac{x}{2}e^{2x}-\frac{1}{4}e^{2x}+C=\frac{e^{2x}}{4}(2x-1)+C$$
   验算：$\left[\dfrac{e^{2x}}{4}(2x-1)\right]'=\dfrac{2e^{2x}(2x-1)+2e^{2x}}{4}=xe^{2x}$ ✓

3. **解**：$x^2-3x+2=(x-1)(x-2)$，设$\dfrac{x}{(x-1)(x-2)}=\dfrac{A}{x-1}+\dfrac{B}{x-2}$，通分得$x=A(x-2)+B(x-1)$。
   令$x=1$得$A=-1$；令$x=2$得$B=2$。所以
$$\int\frac{x}{x^2-3x+2}dx=-\int\frac{dx}{x-1}+2\int\frac{dx}{x-2}=-\ln|x-1|+2\ln|x-2|+C=\ln\left|\frac{(x-2)^2}{x-1}\right|+C$$

## 积分应用与反常积分

### 选择题
1. **答案：A**
   解析：$\int_1^{+\infty}\dfrac{dx}{x^3}=\lim\limits_{b\to+\infty}\left[-\dfrac{1}{2x^2}\right]_1^b=\lim\limits_{b\to+\infty}\left(\dfrac{1}{2}-\dfrac{1}{2b^2}\right)=\dfrac{1}{2}$（也可由$p=3>1$判知收敛）

### 填空题
1. **答案：$\dfrac{4}{3}$**
   解析：联立$y=x^2$与$y=2x$得交点$(0,0)$和$(2,4)$，区间$[0,2]$上$2x\ge x^2$，所以
$$A=\int_0^2(2x-x^2)dx=\left[x^2-\frac{x^3}{3}\right]_0^2=4-\frac{8}{3}=\frac{4}{3}$$

### 解答题
1. **解**：绕$x$轴旋转的体积公式为$V=\pi\int_a^b f^2(x)\,dx$，
$$V=\pi\int_0^{\pi}\sin^2 x\,dx=\pi\int_0^{\pi}\frac{1-\cos 2x}{2}dx=\pi\left[\frac{x}{2}-\frac{\sin 2x}{4}\right]_0^{\pi}=\pi\cdot\frac{\pi}{2}=\frac{\pi^2}{2}$$

2. **解**：用分部积分法，令$u=x$，$dv=e^{-x}dx$，则$du=dx$，$v=-e^{-x}$，
$$\int_0^{+\infty}xe^{-x}dx=\left[-xe^{-x}\right]_0^{+\infty}+\int_0^{+\infty}e^{-x}dx=0+\left[-e^{-x}\right]_0^{+\infty}=1$$
   （其中$\lim\limits_{b\to+\infty}\dfrac{b}{e^b}=0$，由洛必达法则可知）

## 级数

### 选择题
1. **答案：C**
   解析：A为调和级数（$p=1$）发散；B为$p=\dfrac{1}{2}$的$p$-级数发散；C中$\dfrac{1}{n\sqrt{n}}=\dfrac{1}{n^{3/2}}$，是$p=\dfrac{3}{2}>1$的$p$-级数，收敛；D中通项$\left(1+\dfrac{1}{n}\right)^n\to e\neq 0$，级数发散

### 填空题
1. **答案：$R=1$；收敛域为$(-1,1]$**
   解析：$R=\lim\limits_{n\to\infty}\left|\dfrac{a_n}{a_{n+1}}\right|=\lim\limits_{n\to\infty}\dfrac{n+1}{n}=1$；端点处：$x=1$时级数为调和级数$\sum\dfrac{1}{n}$发散，$x=-1$时为交错级数$\sum\dfrac{(-1)^n}{n}$，由莱布尼茨判别法收敛，故收敛域为$(-1,1]$

### 解答题
1. **解**：
   - 先考虑绝对值级数$\sum\limits_{n=1}^{\infty}\left|\dfrac{(-1)^{n-1}}{\sqrt{n}}\right|=\sum\limits_{n=1}^{\infty}\dfrac{1}{\sqrt{n}}=\sum\limits_{n=1}^{\infty}\dfrac{1}{n^{1/2}}$，是$p=\dfrac{1}{2}\le 1$的$p$-级数，发散，故该级数不是绝对收敛。
   - 再看原级数$\sum\limits_{n=1}^{\infty}\dfrac{(-1)^{n-1}}{\sqrt{n}}$：$a_n=\dfrac{1}{\sqrt{n}}>0$，单调递减，且$\lim\limits_{n\to\infty}\dfrac{1}{\sqrt{n}}=0$，由莱布尼茨判别法知其收敛。
   
   综上，该级数为**条件收敛**。

## 多元微积分

### 选择题
1. **答案：B**
   解析：对$x$求偏导时把$y$看作常数：$\dfrac{\partial}{\partial x}(x^2y)=2xy$；$\dfrac{\partial}{\partial x}(e^{xy})=e^{xy}\cdot y=ye^{xy}$，故$\dfrac{\partial z}{\partial x}=2xy+ye^{xy}$

### 填空题
1. **答案：$2x\,dx+2y\,dy$**
   解析：$\dfrac{\partial z}{\partial x}=2x$，$\dfrac{\partial z}{\partial y}=2y$，故$dz=\dfrac{\partial z}{\partial x}dx+\dfrac{\partial z}{\partial y}dy=2x\,dx+2y\,dy$

### 解答题
1. **解**：求驻点：
$$f_x=2x+y-3=0,\qquad f_y=x+2y=0$$
   由第二式得$x=-2y$，代入第一式：$-4y+y-3=0$，解得$y=-1$，$x=2$，驻点为$(2,-1)$。
   
   求二阶偏导数：$A=f_{xx}=2$，$B=f_{xy}=1$，$C=f_{yy}=2$，
$$AC-B^2=2\times 2-1=3>0\ \text{且}\ A=2>0$$
   所以$f(x,y)$在$(2,-1)$处取得**极小值**：
$$f(2,-1)=4+2\times(-1)+1-6=-3$$

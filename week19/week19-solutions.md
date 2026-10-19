# 第19周：模拟测试答案

## 模拟试卷一

### 选择题

1. **答案：B**
   解析：当$x\to 0$时，$1-\cos x\sim\dfrac{x^2}{2}$，所以$\lim\limits_{x\to 0}\dfrac{1-\cos x}{x^2}=\lim\limits_{x\to 0}\dfrac{x^2/2}{x^2}=\dfrac{1}{2}$

2. **答案：B**
   解析：$f'(x)=3x^2-6x=3x(x-2)$，令$f'(x)<0$得$0<x<2$，故单调递减区间为$(0,2)$

3. **答案：C**
   解析：$\int_0^1\dfrac{dx}{1+x^2}=\left[\arctan x\right]_0^1=\arctan 1-\arctan 0=\dfrac{\pi}{4}$

4. **答案：C**
   解析：A为调和级数（$p=1$）发散；B为$p=\dfrac{1}{2}\le 1$的$p$-级数发散；C为$p=2>1$的$p$-级数收敛；D的通项$\left(1+\dfrac{1}{n}\right)^n\to e\neq 0$，级数发散

5. **答案：A**
   解析：对$y$求偏导时把$x$看作常数：$\dfrac{\partial z}{\partial y}=e^x\cos y$

### 填空题

1. **答案：$2$**
   解析：当$x\to 0$时，$\ln(1+2x)\sim 2x$，所以$\lim\limits_{x\to 0}\dfrac{\ln(1+2x)}{x}=\lim\limits_{x\to 0}\dfrac{2x}{x}=2$

2. **答案：$y=9x-16$**
   解析：$y'=3x^2-3$，在$x=2$处切线斜率$k=y'(2)=9$，切点$(2,2)$，切线方程$y-2=9(x-2)$，即$y=9x-16$

3. **答案：$4-2\ln 3$**
   解析：令$t=\sqrt{x}$，则$x=t^2$，$dx=2t\,dt$；$x=0\to t=0$，$x=4\to t=2$，
$$\int_0^4\frac{dx}{1+\sqrt{x}}=\int_0^2\frac{2t}{1+t}dt=2\int_0^2\left(1-\frac{1}{1+t}\right)dt=2\left[t-\ln(1+t)\right]_0^2=4-2\ln 3$$

4. **答案：$\dfrac{1}{2}$**
   解析：$\int_0^{+\infty}e^{-2x}dx=\lim\limits_{b\to+\infty}\left[-\dfrac{1}{2}e^{-2x}\right]_0^b=\lim\limits_{b\to+\infty}\left(\dfrac{1}{2}-\dfrac{1}{2}e^{-2b}\right)=\dfrac{1}{2}$

5. **答案：$R=\sqrt{2}$**
   解析：幂级数为几何级数形式$\sum\limits_{n=0}^{\infty}\left(\dfrac{x^2}{2}\right)^n$，收敛当且仅当$\left|\dfrac{x^2}{2}\right|<1$，即$|x|<\sqrt{2}$，故收敛半径$R=\sqrt{2}$

### 解答题

1. **解**：这是$\dfrac{0}{0}$型极限，用洛必达法则：
$$\lim_{x\to 0}\frac{x-\sin x}{x^3}=\lim_{x\to 0}\frac{1-\cos x}{3x^2}=\lim_{x\to 0}\frac{\frac{x^2}{2}}{3x^2}=\frac{1}{6}$$
   （第二次化简用了$1-\cos x\sim\dfrac{x^2}{2}$，也可再用一次洛必达得$\lim\limits_{x\to 0}\dfrac{\sin x}{6x}=\dfrac{1}{6}$）
   **评分要点**：判定类型并用洛必达（或泰勒展开$x-\sin x=\dfrac{x^3}{6}+o(x^3)$）得4分；正确化简并得出$\dfrac{1}{6}$得4分。

2. **解**：方程$xy+\ln y=1$两边对$x$求导（$y$是$x$的函数）：
$$y+xy'+\frac{1}{y}y'=0$$
   解得$\dfrac{dy}{dx}=-\dfrac{y}{x+\dfrac{1}{y}}=-\dfrac{y^2}{xy+1}$。
   当$x=1$时，原方程为$y+\ln y=1$，显然$y=1$满足，所以
$$\left.\frac{dy}{dx}\right|_{x=1}=-\frac{1^2}{1\times 1+1}=-\frac{1}{2}$$
   **评分要点**：隐函数求导正确得4分；整理出$\dfrac{dy}{dx}=-\dfrac{y^2}{xy+1}$得2分；确定$x=1$时$y=1$得2分；求出$-\dfrac{1}{2}$得2分。

3. **解**：设剪去的小正方形边长为$x$ cm，则盒子的底面边长为$48-2x$，高为$x$，容积为
$$V(x)=x(48-2x)^2,\qquad 0<x<24$$
   求导：
$$V'(x)=(48-2x)^2+x\cdot 2(48-2x)(-2)=(48-2x)\left[(48-2x)-4x\right]=(48-2x)(48-6x)$$
   令$V'(x)=0$得$x=8$或$x=24$（舍去，超出定义域）。
   当$0<x<8$时$V'(x)>0$，当$8<x<24$时$V'(x)<0$，故$V(x)$在$x=8$处取得极大值，也是$(0,24)$内的最大值。
$$V(8)=8\times(48-16)^2=8\times 32^2=8192\ (\text{cm}^3)$$
   答：剪去的小正方形边长为$8\text{ cm}$时容积最大，最大容积为$8192\text{ cm}^3$。
   **评分要点**：建立容积函数并写明定义域得4分；正确求导并求出驻点$x=8$得3分；说明最大值理由并算出$V(8)=8192$得3分。

4. **解**：将$\sin^3 x$变形：$\sin^3 x=\sin x(1-\cos^2 x)$，令$u=\cos x$，则$du=-\sin x\,dx$；$x=0\to u=1$，$x=\pi\to u=-1$，
$$\int_0^{\pi}\sin^3 x\,dx=\int_0^{\pi}\sin x(1-\cos^2 x)\,dx=-\int_1^{-1}(1-u^2)\,du=\int_{-1}^{1}(1-u^2)\,du$$
$$=\left[u-\frac{u^3}{3}\right]_{-1}^{1}=\left(1-\frac{1}{3}\right)-\left(-1+\frac{1}{3}\right)=\frac{4}{3}$$
   **评分要点**：拆分$\sin^3 x=\sin x(1-\cos^2 x)$得3分；换元（或直接积分$\left[-\cos x+\dfrac{\cos^3 x}{3}\right]_0^{\pi}$）正确得4分；结果$\dfrac{4}{3}$得3分。

5. **解**：记$a_n=\dfrac{n\cdot 2^n}{3^n}=n\left(\dfrac{2}{3}\right)^n>0$，用比值判别法：
$$\lim_{n\to\infty}\frac{a_{n+1}}{a_n}=\lim_{n\to\infty}\frac{(n+1)\cdot 2^{n+1}}{3^{n+1}}\cdot\frac{3^n}{n\cdot 2^n}=\lim_{n\to\infty}\frac{n+1}{n}\cdot\frac{2}{3}=\frac{2}{3}<1$$
   由比值判别法知该级数**收敛**。
   **评分要点**：写明使用比值判别法并正确计算极限$\dfrac{2}{3}$得5分（其中未写判别法名称扣1分）；得出收敛结论得5分。

6. **解**：求驻点：
$$f_x=3x^2+6x-9=3(x+3)(x-1)=0\ \Rightarrow\ x=1\ \text{或}\ x=-3$$
$$f_y=-3y^2+6y=-3y(y-2)=0\ \Rightarrow\ y=0\ \text{或}\ y=2$$
   得四个驻点：$(1,0)$，$(1,2)$，$(-3,0)$，$(-3,2)$。
   求二阶偏导数：$A=f_{xx}=6x+6$，$B=f_{xy}=0$，$C=f_{yy}=-6y+6$，判别式$AC-B^2=(6x+6)(-6y+6)$。
   - 在$(1,0)$处：$A=12>0$，$C=6$，$AC-B^2=72>0$，为**极小值点**，极小值$f(1,0)=1+0+3+0-9=-5$；
   - 在$(1,2)$处：$AC-B^2=12\times(-6)=-72<0$，不是极值点；
   - 在$(-3,0)$处：$AC-B^2=(-12)\times 6=-72<0$，不是极值点；
   - 在$(-3,2)$处：$A=-12<0$，$C=-6$，$AC-B^2=72>0$，为**极大值点**，极大值$f(-3,2)=-27-8+27+12+27=31$。
   
   综上，极小值为$f(1,0)=-5$，极大值为$f(-3,2)=31$。
   **评分要点**：正确求偏导并解出四个驻点得4分；计算$A$、$B$、$C$及$AC-B^2$并逐点判别得4分；正确算出极小值$-5$和极大值$31$各得2分。

## 模拟试卷二

### 选择题

1. **答案：C**
   解析：分子分母同除$x^2$（或抓最高次项）：$\lim\limits_{x\to\infty}\dfrac{3x^2+x+1}{x^2+2}=\lim\limits_{x\to\infty}\dfrac{3+\frac{1}{x}+\frac{1}{x^2}}{1+\frac{2}{x^2}}=3$

2. **答案：A**
   解析：$y'=\dfrac{2x}{1+x^2}$，再求导：$y''=\dfrac{2(1+x^2)-2x\cdot 2x}{(1+x^2)^2}=\dfrac{2-2x^2}{(1+x^2)^2}=\dfrac{2(1-x^2)}{(1+x^2)^2}$

3. **答案：D**
   解析：凑微分$\dfrac{x}{1+x^2}dx=\dfrac{1}{2}d(1+x^2)$，所以$\int_0^1\dfrac{x}{1+x^2}dx=\dfrac{1}{2}\left[\ln(1+x^2)\right]_0^1=\dfrac{1}{2}\ln 2$

4. **答案：B**
   解析：先看绝对值级数$\sum\dfrac{1}{n}$为调和级数，发散，故不是绝对收敛；原交错级数满足$a_n=\dfrac{1}{n}$单调递减且$\lim\limits_{n\to\infty}\dfrac{1}{n}=0$，由莱布尼茨判别法收敛，故为条件收敛

5. **答案：A**
   解析：$\dfrac{\partial z}{\partial x}=\dfrac{1}{1+\left(\frac{y}{x}\right)^2}\cdot\left(-\dfrac{y}{x^2}\right)=\dfrac{x^2}{x^2+y^2}\cdot\left(-\dfrac{y}{x^2}\right)=-\dfrac{y}{x^2+y^2}$

### 填空题

1. **答案：$\dfrac{1}{3}$**
   解析：由泰勒展开$\tan x=x+\dfrac{x^3}{3}+o(x^3)$，得$\lim\limits_{x\to 0}\dfrac{\tan x-x}{x^3}=\dfrac{1}{3}$（也可三次洛必达：$\lim\dfrac{\sec^2 x-1}{3x^2}=\lim\dfrac{\tan^2 x}{3x^2}=\dfrac{1}{3}$）

2. **答案：$3^n e^{3x}$**
   解析：$f'(x)=3e^{3x}$，$f''(x)=3^2e^{3x}$，归纳可得$f^{(n)}(x)=3^ne^{3x}$

3. **答案：$2$**
   解析：这是以$x=1$为瑕点的瑕积分：$\int_0^1\dfrac{dx}{\sqrt{1-x}}=\lim\limits_{\varepsilon\to 0^+}\left[-2\sqrt{1-x}\right]_0^{1-\varepsilon}=\lim\limits_{\varepsilon\to 0^+}\left(2-2\sqrt{\varepsilon}\right)=2$

4. **答案：$\dfrac{1}{2}$**
   解析：部分分式分解$\dfrac{1}{(2n-1)(2n+1)}=\dfrac{1}{2}\left(\dfrac{1}{2n-1}-\dfrac{1}{2n+1}\right)$，前$N$项部分和
$$S_N=\frac{1}{2}\left(1-\frac{1}{2N+1}\right)\to\frac{1}{2}\quad(N\to\infty)$$

5. **答案：$yx^{y-1}$**
   解析：对$x$求偏导时把$y$看作常数，按幂函数求导：$\dfrac{\partial z}{\partial x}=yx^{y-1}$

### 解答题

1. **解**：通分：
$$\lim_{x\to 0}\left(\frac{1}{x}-\frac{1}{\sin x}\right)=\lim_{x\to 0}\frac{\sin x-x}{x\sin x}$$
   这是$\dfrac{0}{0}$型极限。当$x\to 0$时，$\sin x\sim x$，故分母$x\sin x\sim x^2$（等价替换用于乘积因子）；分子由泰勒展开$\sin x=x-\dfrac{x^3}{6}+o(x^3)$得$\sin x-x\sim-\dfrac{x^3}{6}$。所以
$$\lim_{x\to 0}\frac{\sin x-x}{x\sin x}=\lim_{x\to 0}\frac{-\frac{x^3}{6}}{x^2}=\lim_{x\to 0}\left(-\frac{x}{6}\right)=0$$
   （也可两次洛必达：$\lim\dfrac{\cos x-1}{\sin x+x\cos x}=\lim\dfrac{-\sin x}{2\cos x-x\sin x}=0$）
   **评分要点**：正确通分得4分；用等价无穷小/泰勒或洛必达化简得2分；结果$0$得2分。

2. **解**：$y'=4x^3-12x$，$y''=12x^2-12=12(x-1)(x+1)$。
   - 当$x=\pm 1$时，$y''=0$；
   - 当$x\in(-\infty,-1)$时，$y''>0$，曲线为凹（下凸）；
   - 当$x\in(-1,1)$时，$y''<0$，曲线为凸（上凸）；
   - 当$x\in(1,+\infty)$时，$y''>0$，曲线为凹（下凸）。
   
   二阶导数在$x=\pm 1$两侧均变号，故拐点为$(-1, f(-1))=(-1,-4)$和$(1, f(1))=(1,-4)$。
   
   综上：凹区间为$(-\infty,-1)$和$(1,+\infty)$，凸区间为$(-1,1)$，拐点为$(-1,-4)$与$(1,-4)$。
   **评分要点**：正确求出$y''$并解$y''=0$得3分；分区间讨论并写出凹凸区间得4分；求出两个拐点的坐标得3分。

3. **解**：联立$y^2=2x$与$y=x-4$：将$y=x-4$代入，得$(x-4)^2=2x$，即$x^2-10x+16=0$，解得$x=2$或$x=8$，交点为$(2,-2)$和$(8,4)$。
   以$y$为积分变量较简便：右边界为直线$x=y+4$，左边界为抛物线$x=\dfrac{y^2}{2}$，$y\in[-2,4]$：
$$A=\int_{-2}^{4}\left[(y+4)-\frac{y^2}{2}\right]dy=\left[\frac{y^2}{2}+4y-\frac{y^3}{6}\right]_{-2}^{4}$$
$$=\left(8+16-\frac{64}{6}\right)-\left(2-8+\frac{8}{6}\right)=\frac{40}{3}-\left(-\frac{14}{3}\right)=18$$
   所围图形的面积为$18$。
   **评分要点**：正确求出交点$(2,-2)$与$(8,4)$得3分；选择积分变量并列出正确的被积表达式得4分；计算得面积$18$得3分。

4. **解**：令$t=\sqrt{e^x-1}$，则$e^x=1+t^2$，$x=\ln(1+t^2)$，$dx=\dfrac{2t}{1+t^2}dt$；$x=0\to t=0$，$x=\ln 2\to t=1$。
$$\int_0^{\ln 2}\sqrt{e^x-1}\,dx=\int_0^1 t\cdot\frac{2t}{1+t^2}dt=2\int_0^1\frac{t^2}{1+t^2}dt=2\int_0^1\left(1-\frac{1}{1+t^2}\right)dt$$
$$=2\left[t-\arctan t\right]_0^1=2\left(1-\frac{\pi}{4}\right)=2-\frac{\pi}{2}$$
   **评分要点**：正确换元（含新积分限）得4分；化简为$2\int_0^1\left(1-\dfrac{1}{1+t^2}\right)dt$得3分；结果$2-\dfrac{\pi}{2}$得3分。

5. **解**：利用几何级数展开式$\dfrac{1}{1-u}=\sum\limits_{n=0}^{\infty}u^n$（$|u|<1$）：
$$f(x)=\frac{1}{2-x}=\frac{1}{2}\cdot\frac{1}{1-\frac{x}{2}}=\frac{1}{2}\sum_{n=0}^{\infty}\left(\frac{x}{2}\right)^n=\sum_{n=0}^{\infty}\frac{x^n}{2^{n+1}}$$
   收敛条件为$\left|\dfrac{x}{2}\right|<1$，即$|x|<2$；当$x=\pm 2$时通项不趋于0，级数发散。
   所以展开式为$f(x)=\sum\limits_{n=0}^{\infty}\dfrac{x^n}{2^{n+1}}$，收敛域为$(-2,2)$。
   **评分要点**：正确提取公因子化为$\dfrac{1}{2}\cdot\dfrac{1}{1-\frac{x}{2}}$得4分；写出幂级数$\sum\limits_{n=0}^{\infty}\dfrac{x^n}{2^{n+1}}$得3分；正确指出收敛域$(-2,2)$得3分。

6. **解**：作拉格朗日函数：
$$L(x,y,\lambda)=xy+\lambda(x^2+y^2-8)$$
   令各偏导数为零：
$$\begin{cases} L_x=y+2\lambda x=0\\ L_y=x+2\lambda y=0\\ L_\lambda=x^2+y^2-8=0 \end{cases}$$
   前两式相减：$(y-x)(1-2\lambda)=0$，分两种情形：
   - 若$x=y$：代入约束得$2x^2=8$，$x=\pm 2$，得点$(2,2)$和$(-2,-2)$，此时$f=xy=4$；
   - 若$\lambda=\dfrac{1}{2}$：则$y+x=0$即$y=-x$，代入约束得$2x^2=8$，$x=\pm 2$，得点$(2,-2)$和$(-2,2)$，此时$f=xy=-4$。
   
   四个候选点处$f$的值为$4,4,-4,-4$，且约束曲线为圆周（有界闭集），最值必存在。
   
   所以最大值为$f(2,2)=f(-2,-2)=4$，最小值为$f(2,-2)=f(-2,2)=-4$。
   **评分要点**：正确建立拉格朗日函数得4分；解方程组求出全部四个候选点得4分；比较函数值并得出最大值$4$、最小值$-4$各得2分。

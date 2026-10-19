# 第18周：综合复习

## 学习目标
- 系统梳理前17周全部核心知识点，形成完整的知识网络
- 熟练掌握极限、导数、积分、级数、多元微积分的核心公式
- 明确各模块的常见易错点，规避典型错误
- 建立"模块—公式—易错点"三级记忆结构，能快速检索知识
- 通过公式清单自测，定位薄弱环节并回炉相应周次的内容

## 学习内容

### 1. 极限与连续（第2周）

#### 1.1 核心公式与结论
- 两个重要极限：$\lim\limits_{x\to 0}\dfrac{\sin x}{x}=1$；$\lim\limits_{x\to\infty}\left(1+\dfrac{1}{x}\right)^x=e$
- 等价无穷小（$x\to 0$）：$\sin x\sim\tan x\sim\arcsin x\sim\arctan x\sim x$；$1-\cos x\sim\dfrac{x^2}{2}$；$\ln(1+x)\sim e^x-1\sim x$；$(1+x)^\alpha-1\sim\alpha x$
- 洛必达法则：$\dfrac{0}{0}$ 或 $\dfrac{\infty}{\infty}$ 型时 $\lim\dfrac{f(x)}{g(x)}=\lim\dfrac{f'(x)}{g'(x)}$
- 连续定义：$\lim\limits_{x\to x_0}f(x)=f(x_0)$；闭区间上连续函数有最值定理、介值定理、零点定理

#### 1.2 易错点提醒
- 等价无穷小替换只能用于**乘除因子**，加减中随意替换会出错（如 $\lim\dfrac{\tan x-\sin x}{x^3}$ 分子不能换成 $x-x=0$）
- 用洛必达前必须验证 $\dfrac{0}{0}$ 或 $\dfrac{\infty}{\infty}$ 型，且先化简再求导
- 分段函数在分界点处的极限必须分左右极限讨论
- 注意区分：$\lim\limits_{x\to 0}\dfrac{\sin x}{x}=1$，而 $\lim\limits_{x\to\infty}\dfrac{\sin x}{x}=0$

### 2. 导数与求导法则（第3、5周）

#### 2.1 核心公式清单
- 定义：$f'(x)=\lim\limits_{h\to 0}\dfrac{f(x+h)-f(x)}{h}$
- 基本导数表：$(x^n)'=nx^{n-1}$；$(\sin x)'=\cos x$，$(\cos x)'=-\sin x$，$(\tan x)'=\sec^2 x$；$(e^x)'=e^x$，$(a^x)'=a^x\ln a$；$(\ln x)'=\dfrac{1}{x}$；$(\arcsin x)'=\dfrac{1}{\sqrt{1-x^2}}$，$(\arctan x)'=\dfrac{1}{1+x^2}$
- 四则与链式：$(uv)'=u'v+uv'$，$\left(\dfrac{u}{v}\right)'=\dfrac{u'v-uv'}{v^2}$，$[f(g(x))]'=f'(g(x))\cdot g'(x)$
- 隐函数求导：方程两边对 $x$ 求导，$y$ 视为 $x$ 的函数
- 参数方程：$\dfrac{dy}{dx}=\dfrac{\psi'(t)}{\varphi'(t)}$，$\dfrac{d^2y}{dx^2}=\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)\Bigg/\dfrac{dx}{dt}$
- 对数求导法：适用于幂指函数 $u(x)^{v(x)}$

#### 2.2 易错点提醒
- 分段函数在分界点必须用**定义**（或左右导数）求导
- 复合函数求导勿漏链式因子，如 $[\sin 2x]'=2\cos 2x$
- 区分 $a^x$（导数 $a^x\ln a$）与 $x^a$（导数 $ax^{a-1}$）；$x^x$ 型用对数求导法
- 可导必连续，连续不一定可导（如 $|x|$ 在 $x=0$）

### 3. 导数的应用（第4、6周）

#### 3.1 核心公式与结论
- 单调性：区间内 $f'>0$ 递增，$f'<0$ 递减
- 极值判别：$f'(x_0)=0$ 且两侧变号（或 $f''(x_0)>0$ 极小、$f''(x_0)<0$ 极大）
- 凹凸与拐点：$f''>0$ 凹（$\cup$），$f''<0$ 凸（$\cap$）；$f''$ 变号点 $(x_0,f(x_0))$ 为拐点
- 渐近线：水平 $y=b$（$\lim\limits_{x\to\infty}f=b$）；垂直 $x=x_0$（$\lim\limits_{x\to x_0}f=\infty$）；斜线 $y=kx+b$，$k=\lim\dfrac{f}{x}$，$b=\lim(f-kx)$
- 中值定理：罗尔定理；拉格朗日 $f(b)-f(a)=f'(\xi)(b-a)$；柯西定理
- 闭区间最值：比较驻点、不可导点、端点处的函数值

#### 3.2 易错点提醒
- 驻点不一定是极值点（$x^3$ 在 $0$），极值点也可能是不可导点（$|x|$ 在 $0$）
- $f''(x_0)=0$ 时第二判别法失效，改用第一判别法
- 拐点是**曲线上的点** $(x_0,f(x_0))$
- 最值应用题须说明"为何该点是最值"（唯一驻点+实际意义，或比较端点）

### 4. 积分方法（第7、8、9周）

#### 4.1 核心公式清单
- 基本积分表：$\int x^n dx=\dfrac{x^{n+1}}{n+1}+C$（$n\neq-1$）；$\int\dfrac{dx}{x}=\ln|x|+C$；$\int e^x dx=e^x+C$；$\int\sin x\,dx=-\cos x+C$；$\int\cos x\,dx=\sin x+C$；$\int\dfrac{dx}{1+x^2}=\arctan x+C$；$\int\dfrac{dx}{\sqrt{1-x^2}}=\arcsin x+C$；$\int\dfrac{dx}{a^2+x^2}=\dfrac{1}{a}\arctan\dfrac{x}{a}+C$
- 凑微分：$x\,dx=\dfrac{1}{2}d(x^2)$，$\dfrac{dx}{x}=d(\ln x)$，$e^x dx=d(e^x)$，$\dfrac{dx}{\sqrt{x}}=2d(\sqrt{x})$
- 三角代换：含 $\sqrt{a^2-x^2}$ 令 $x=a\sin t$；含 $\sqrt{a^2+x^2}$ 令 $x=a\tan t$；含 $\sqrt{x^2-a^2}$ 令 $x=a\sec t$
- 分部积分：$\int u\,dv=uv-\int v\,du$（按"反对幂指三"顺序选 $u$）
- 有理函数：假分式先做除法，再部分分式分解
- 定积分：区间可加性；对称区间上奇函数积分为 $0$，偶函数积分为 $2\int_0^a f\,dx$
- 牛顿—莱布尼茨公式：$\int_a^b f(x)dx=F(b)-F(a)$；变限积分求导 $\dfrac{d}{dx}\int_{\varphi(x)}^{\psi(x)}f(t)dt=f(\psi)\psi'-f(\varphi)\varphi'$

#### 4.2 易错点提醒
- 定积分换元必须**同时换上下限**
- 分部积分 $u$、$dv$ 选择不当会更复杂；循环型积分（$e^x\sin x$）两次分部后移项解方程
- 奇偶对称性要求**区间对称**
- $\int\dfrac{dx}{x}=\ln|x|+C$ 不要漏绝对值

### 5. 积分应用与反常积分（第10、11周）

#### 5.1 核心公式清单
- 面积：$A=\int_a^b[\text{上曲线}-\text{下曲线}]dx$；对 $y$ 积分则右减左
- 旋转体体积：绕 $x$ 轴 $V=\pi\int_a^b f^2(x)dx$；绕 $y$ 轴（柱壳法）$V=2\pi\int_a^b x|f(x)|dx$
- 弧长：$L=\int_a^b\sqrt{1+[f'(x)]^2}\,dx$
- 反常积分：$\int_a^{+\infty}f\,dx=\lim\limits_{b\to+\infty}\int_a^b f\,dx$；瑕积分需取极限
- 重要结论：$\int_1^{+\infty}\dfrac{dx}{x^p}$ 当 $p>1$ 收敛（值为 $\dfrac{1}{p-1}$）；$\int_0^1\dfrac{dx}{x^p}$ 当 $p<1$ 收敛

#### 5.2 易错点提醒
- 反常积分必须先算有限区间积分**再取极限**
- 瑕点在区间内部时必须**拆分区间**讨论
- 面积是正数：曲线交叉时需分段取"上减下"
- 绕 $y$ 轴旋转时权衡圆盘法（对 $y$ 积分）与柱壳法（对 $x$ 积分）

### 6. 级数（第12、13、14周）

#### 6.1 核心公式与结论
- 几何级数：$\sum ar^n$ 当 $|r|<1$ 收敛于 $\dfrac{a}{1-r}$，$|r|\ge 1$ 发散
- $p$-级数：$\sum\dfrac{1}{n^p}$ 当 $p>1$ 收敛，$p\le 1$ 发散（调和级数发散）
- 正项级数判别法：比较（及极限形式）；比值法 $\rho=\lim\dfrac{a_{n+1}}{a_n}$，$\rho<1$ 收敛、$\rho>1$ 发散、$\rho=1$ 失效；根值法同理；积分判别法
- 莱布尼茨判别法：$a_n$ 单调递减且 $\lim a_n=0$，则 $\sum(-1)^{n-1}a_n$ 收敛
- 绝对收敛 $\Rightarrow$ 收敛；收敛但取绝对值后发散为条件收敛
- 幂级数收敛半径：$R=\lim\limits_{n\to\infty}\left|\dfrac{a_n}{a_{n+1}}\right|$，端点单独判定
- 常用展开：
  - $e^x=\sum\limits_{n=0}^{\infty}\dfrac{x^n}{n!}$；$\sin x=\sum\limits_{n=0}^{\infty}\dfrac{(-1)^n x^{2n+1}}{(2n+1)!}$；$\cos x=\sum\limits_{n=0}^{\infty}\dfrac{(-1)^n x^{2n}}{(2n)!}$
  - $\dfrac{1}{1-x}=\sum\limits_{n=0}^{\infty}x^n$（$|x|<1$）；$\ln(1+x)=\sum\limits_{n=1}^{\infty}\dfrac{(-1)^{n-1}x^n}{n}$（$-1<x\le 1$）

#### 6.2 易错点提醒
- 收敛半径 $R$ 与收敛域不同：**端点必须单独判定**
- 比值、根值判别法在 $\rho=1$ 时失效
- 莱布尼茨的两个条件（单调递减、通项趋于0）都要验证
- 通项 $a_n\nrightarrow 0$ 可判定发散，但 $a_n\to 0$ 不能保证收敛

### 7. 多元微积分（第15、16、17周）

#### 7.1 核心公式与结论
- 偏导数：固定一个变量、对另一变量求导
- 全微分：$dz=\dfrac{\partial z}{\partial x}dx+\dfrac{\partial z}{\partial y}dy$
- 链式法则：$\dfrac{\partial z}{\partial x}=\dfrac{\partial z}{\partial u}\dfrac{\partial u}{\partial x}+\dfrac{\partial z}{\partial v}\dfrac{\partial v}{\partial x}$
- 隐函数求导：$F(x,y,z)=0$ 时 $\dfrac{\partial z}{\partial x}=-\dfrac{F_x}{F_z}$
- 二元极值：解 $f_x=f_y=0$，记 $A=f_{xx}$，$B=f_{xy}$，$C=f_{yy}$；$AC-B^2>0$ 且 $A>0$ 极小、$A<0$ 极大；$AC-B^2<0$ 无极值；$=0$ 失效
- 拉格朗日乘数法：解 $f_x=\lambda g_x$，$f_y=\lambda g_y$，$g=0$
- 二重积分：$X$ 型 $\int_a^b dx\int_{y_1(x)}^{y_2(x)}f\,dy$；极坐标 $dx\,dy=r\,dr\,d\theta$

#### 7.2 易错点提醒
- 多元函数**偏导数存在不能保证连续**（与一元不同）
- 极坐标变换**勿漏因子 $r$**
- $AC-B^2=0$ 时判别法失效，需其他方法
- 拉格朗日乘数法得到的是候选点，最值需比较各候选点或结合实际意义

### 8. 知识框架总结

整门课程以"**极限**"为工具主线，框架如下：

- **极限与连续（第2周）**：极限运算 $\Rightarrow$ 两个重要极限 $\Rightarrow$ 等价无穷小 $\Rightarrow$ 连续与间断
- **一元微分学（第3—6周）**：导数定义 $\Rightarrow$ 求导法则 $\Rightarrow$ 中值定理 $\Rightarrow$ 单调、极值、凹凸、渐近线、洛必达、最值优化
- **一元积分学（第7—11周）**：不定积分 $\Rightarrow$ 三大方法（换元、分部、部分分式）$\Rightarrow$ 牛顿—莱布尼茨公式 $\Rightarrow$ 应用（面积、体积、弧长）$\Rightarrow$ 反常积分
- **无穷级数（第12—14周）**：数项级数 $\Rightarrow$ 正项判别法 $\Rightarrow$ 交错级数与绝对/条件收敛 $\Rightarrow$ 幂级数收敛域 $\Rightarrow$ 泰勒展开与应用
- **多元微分学（第15、16周）**：偏导与全微分 $\Rightarrow$ 链式与隐函数求导 $\Rightarrow$ 二元极值与拉格朗日乘数法
- **多元积分学（第17周）**：二重积分 $\Rightarrow$ 直角坐标累次积分与交换次序 $\Rightarrow$ 极坐标计算

各模块联系：极限是导数与积分定义的基础；中值定理沟通导数与函数性态；牛顿—莱布尼茨公式沟通微分与积分；泰勒公式与级数敛散判别又都依赖极限；多元微积分是一元理论的平行推广。

## 学习建议
- 先"合上书自测"：逐条回忆公式清单再对照检查，标记遗忘的公式重点巩固
- 把易错点整理成检查清单，做题前快速过一遍，形成条件反射
- 按模块回看对应周次的错题，区分"概念不清""方法不会""计算失误"
- 依第8节框架画一张自己的思维导图，检验能否脱稿复述
- 优先复习薄弱模块，配合本周练习题（week18-exercises.md）检验效果
- 复习的同时为下周模拟测试做准备，保持每天1—2小时连续练习

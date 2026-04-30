# 第9周：分部积分法与部分分式

## 学习目标
- 掌握分部积分法
- 学会选择合适的u和dv
- 掌握部分分式分解的方法
- 能够计算有理函数的积分
- 学会综合运用各种积分方法

## 学习内容

### 1. 分部积分法

#### 1.1 基本原理
分部积分法是基于乘积求导法则的逆运算。设$u = u(x)$和$v = v(x)$都具有连续导数，则：
$$(uv)' = u'v + uv'$$
移项得：
$$uv' = (uv)' - u'v$$
两边积分：
$$\int uv' dx = uv - \int u'v dx$$
或写成：
$$\int u dv = uv - \int v du$$

#### 1.2 选择u和dv的原则
选择$u$和$dv$时，通常遵循以下原则：
1. $dv$容易积分；
2. $\int v du$比$\int u dv$更容易计算。

常用的选择顺序（LIATE原则）：
- L：对数函数（Logarithmic）
- I：反三角函数（Inverse trigonometric）
- A：代数函数（Algebraic）
- T：三角函数（Trigonometric）
- E：指数函数（Exponential）

通常选择排在前面的函数作为$u$，排在后面的函数作为$dv$。

#### 1.3 典型例题
1. $\int x e^x dx$
   - 令$u = x$，$dv = e^x dx$，则$du = dx$，$v = e^x$
   - 原式$= x e^x - \int e^x dx = x e^x - e^x + C = e^x(x - 1) + C$

2. $\int x \sin x dx$
   - 令$u = x$，$dv = \sin x dx$，则$du = dx$，$v = -\cos x$
   - 原式$= -x \cos x + \int \cos x dx = -x \cos x + \sin x + C$

3. $\int \ln x dx$
   - 令$u = \ln x$，$dv = dx$，则$du = \frac{1}{x} dx$，$v = x$
   - 原式$= x \ln x - \int x \cdot \frac{1}{x} dx = x \ln x - x + C$

#### 1.4 多次分部积分
有些积分需要多次应用分部积分法。

例：$\int x^2 e^x dx$
- 第一次：令$u = x^2$，$dv = e^x dx$，则$du = 2x dx$，$v = e^x$
  - 原式$= x^2 e^x - 2 \int x e^x dx$
- 第二次：对$\int x e^x dx$应用分部积分，令$u = x$，$dv = e^x dx$
  - $\int x e^x dx = x e^x - e^x + C$
- 所以原式$= x^2 e^x - 2(x e^x - e^x) + C = e^x(x^2 - 2x + 2) + C$

#### 1.5 定积分的分部积分
$$\int_a^b u dv = [uv]_a^b - \int_a^b v du$$

例：$\int_0^1 x e^x dx = [x e^x]_0^1 - \int_0^1 e^x dx = e - (e - 1) = 1$

### 2. 部分分式分解

#### 2.1 有理函数的积分
有理函数是指两个多项式的商：
$$\frac{P(x)}{Q(x)} = \frac{a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0}{b_m x^m + b_{m-1} x^{m-1} + \cdots + b_1 x + b_0}$$

如果$n \geq m$，先进行多项式除法，将其化为多项式与真分式之和。

#### 2.2 部分分式分解的步骤
1. 将分母$Q(x)$因式分解为一次因式和二次因式的乘积；
2. 根据因式分解的结果，将真分式分解为部分分式之和；
3. 确定部分分式的系数；
4. 分别积分每个部分分式。

#### 2.3 部分分式的形式
1. **一次因式（不重复）**：$\frac{A}{ax + b}$
2. **一次因式（重复k次）**：$\frac{A_1}{ax + b} + \frac{A_2}{(ax + b)^2} + \cdots + \frac{A_k}{(ax + b)^k}$
3. **二次因式（不重复）**：$\frac{Bx + C}{ax^2 + bx + c}$
4. **二次因式（重复k次）**：$\frac{B_1 x + C_1}{ax^2 + bx + c} + \frac{B_2 x + C_2}{(ax^2 + bx + c)^2} + \cdots + \frac{B_k x + C_k}{(ax^2 + bx + c)^k}$

#### 2.4 确定系数的方法
- **待定系数法**：将部分分式通分后，比较分子多项式的系数；
- **代入特殊值法**：选择合适的x值代入，求解系数。

#### 2.5 典型例题
1. $\int \frac{1}{x^2 - 1} dx$
   - 分解：$\frac{1}{x^2 - 1} = \frac{1}{(x - 1)(x + 1)} = \frac{A}{x - 1} + \frac{B}{x + 1}$
   - 通分：$1 = A(x + 1) + B(x - 1)$
   - 令$x = 1$，得$A = \frac{1}{2}$；令$x = -1$，得$B = -\frac{1}{2}$
   - 原式$= \frac{1}{2} \int \frac{1}{x - 1} dx - \frac{1}{2} \int \frac{1}{x + 1} dx = \frac{1}{2} \ln|x - 1| - \frac{1}{2} \ln|x + 1| + C = \frac{1}{2} \ln\left|\frac{x - 1}{x + 1}\right| + C$

2. $\int \frac{x + 1}{x^2 - 2x - 3} dx$
   - 分解：$\frac{x + 1}{(x - 3)(x + 1)} = \frac{A}{x - 3} + \frac{B}{x + 1}$（注意约分化简）
   - 化简：$\frac{1}{x - 3}$（当$x \neq -1$时）
   - 原式$= \int \frac{1}{x - 3} dx = \ln|x - 3| + C$

3. $\int \frac{x^2 + 2}{x(x^2 + 1)} dx$
   - 分解：$\frac{x^2 + 2}{x(x^2 + 1)} = \frac{A}{x} + \frac{Bx + C}{x^2 + 1}$
   - 通分：$x^2 + 2 = A(x^2 + 1) + (Bx + C)x$
   - 比较系数：$A + B = 1$，$C = 0$，$A = 2$
   - 解得：$A = 2$，$B = -1$，$C = 0$
   - 原式$= 2 \int \frac{1}{x} dx - \int \frac{x}{x^2 + 1} dx = 2 \ln|x| - \frac{1}{2} \ln(x^2 + 1) + C$

### 3. 积分方法的综合运用

#### 3.1 换元法与分部积分法的结合
有些积分需要先换元，再使用分部积分法。

例：$\int e^{\sqrt{x}} dx$
- 令$t = \sqrt{x}$，则$x = t^2$，$dx = 2t dt$
- 原式$= 2 \int t e^t dt$
- 再用分部积分：令$u = t$，$dv = e^t dt$
- $= 2(t e^t - e^t) + C = 2e^{\sqrt{x}}(\sqrt{x} - 1) + C$

#### 3.2 部分分式与换元法的结合
有些积分需要先进行部分分式分解，再使用换元法。

例：$\int \frac{1}{x^4 - 1} dx$
- 分解：$\frac{1}{x^4 - 1} = \frac{1}{(x^2 - 1)(x^2 + 1)} = \frac{1}{(x - 1)(x + 1)(x^2 + 1)} = \frac{A}{x - 1} + \frac{B}{x + 1} + \frac{Cx + D}{x^2 + 1}$
- 求解系数后分别积分。

## 学习建议
- 多做练习，熟悉分部积分法中u和dv的选择
- 掌握部分分式分解的各种形式
- 学会综合运用换元法、分部积分法和部分分式分解
- 注意积分后的结果可以通过求导验证
- 总结不同类型积分的解题策略
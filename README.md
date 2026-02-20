## 磁力推导
### 符号对照表
| 符号                                                     | 物理意义                                 | 单位                |
| -------------------------------------------------------- | ---------------------------------------- | ------------------- |
| $M$                                                      | 球内均匀磁化强度大小                     | A/m                 |
| $R$                                                      | 磁球半径                                 | m                   |
| $\mathbf{d} = \mathbf{x}_2 - \mathbf{x}_1$               | 球心2相对球心1的位移矢量                 | ​m                  |
| $\hat{d}$                                                | 连心方向单位矢量                         |                     |
| $\hat{m}_1, \hat{m}_2$                                   | ​球1、球2的磁矩方向单位矢量              |
| $\hat{s}$                                                | 球面上某点的单位外法向矢量               |
| $\sigma(\hat{s}) = \mu_0 M (\hat{m}\cdot\hat{s})$        | 球表面磁荷面密度                         | T = Wb/$\text{m}^2$ |
| $\delta A$                                               | 第 i 个采样点所对应的微小面积元          | $m^2$               |
| $q_i = \sigma(\hat{s}_i) \cdot \delta A$                 | ​第 $i$ 个采样点的"磁荷量"               | Wb                  |
| $\mathbf{r}_{1,i} = R\hat{s}_i^{(1)}$                    | ​球1表面第 i 采样点相对球心的位置        | ​m                  |
| $\mathbf{r}_{2,i} = R\hat{s}_i^{(2)}$                    | ​球2表面第 i 采样点相对球心的位置        | ​m                  |
| $\mathbf{r}_{2d,j} = \mathbf{r}_{2,j} + \mathbf{d}$      | ​球2表面第 j 点在球心1坐标系中的位置     | m                   |
| $\mathbf{r}_{ij} = \mathbf{r}_{2d,j} - \mathbf{r}_{1,i}$ | ​从​球1采样点 i 到球2采样点 j 的相对位矢 | m                   |
| $\mathbf{F}$                                             | 球2受到球1的磁场力                       | N                   |
| $\boldsymbol{\tau}_1$                                    | ​球1受到的力矩（对球心1取矩）            | N·m                 |
| $\boldsymbol{\tau}_2$                                    | ​球2受到的力矩（对球心2取矩）            | N·m                 |
| $C = \dfrac{1}{4\pi\mu_0}$                               | 磁荷库仑常数                             | N/$\text{Wb}^2$     |
| $\mathbf{D}_i = \mathbf{d} - \mathbf{r}_{1,i}$           | ​固定球1第 i 点后的等效偏移              | m                   |

### 均匀磁化球之间的相互作用能公式推导
均匀磁化球可以用表面磁荷等效：
$$\sigma(\hat{n}) = \mu_0 M (\hat{m} \cdot \hat{n})$$
两球相互作用能：
$$
U = \frac{1}{4\pi\mu_0} \iint \frac{\sigma_1(\hat{n}_1)\, \sigma_2(\hat{n}_2)}{|\vec{r}_2 - \vec{r}_1|} \, dA_1 \, dA_2
$$
根据电磁学的基本原理（Griffiths / Rvachev 1996），对于一个均匀磁化的球体（磁化强度 M 均匀分布），其在外部区域（$d > R$）的磁标势的多极展开确实精确地截断在 l=1 项，即只有偶极贡献，没有更高阶的多极项（如四极 l=2 或更高）。**均匀磁化球的外部场严格等于一个点偶极子。**
$$
r2\Phi_1(\vec{r}) = \frac{\mu_0 M R^3}{3} \frac{\hat{m}_1 \cdot \hat{r}}{r^2}
$$

因此球2在球1产生的场中的能量：
$$
U = -\mu_0 \vec{M}_2 \cdot \vec{B}_1(\vec{d})\cdot \frac{4\pi R^3}{3}
$$
直接用偶极-偶极能：
$$
U = \frac{\mu_0}{4\pi} \frac{1}{d^3}\left[(\vec{m}_1\cdot\vec{m}_2) - 3(\vec{m}_1\cdot\hat{d})(\vec{m}_2\cdot\hat{d})\right]
$$
其中 $|\vec{m}| = \frac{4\pi R^3 M}{3}$，代入：
$$
U = \frac{\mu_0}{4\pi} \frac{1}{d^3} \left(\frac{4\pi R^3 M}{3}\right)^2 \left[r - 3pq\right]
\\
= \frac{\mu_0}{4\pi} \cdot \frac{16\pi^2 R^6 M^2}{9} \cdot \frac{1}{d^3} \cdot [r - 3pq]
\\
= \frac{4\pi\mu_0 M^2 R^6}{9 d^3} [r - 3pq]
$$

## Getting Started

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

The app will start on your local development server (typically `http://localhost:5173`).

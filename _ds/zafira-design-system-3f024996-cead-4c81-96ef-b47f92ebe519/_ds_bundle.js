/* @ds-bundle: {"format":4,"namespace":"ZafiraDesignSystem_3f0249","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"GuaranteeSeal","sourcePath":"components/commerce/GuaranteeSeal.jsx"},{"name":"QuantitySelector","sourcePath":"components/commerce/QuantitySelector.jsx"},{"name":"TrustBadges","sourcePath":"components/commerce/TrustBadges.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"CheckList","sourcePath":"components/content/CheckList.jsx"},{"name":"IngredientCard","sourcePath":"components/content/IngredientCard.jsx"},{"name":"ReviewCard","sourcePath":"components/content/ReviewCard.jsx"},{"name":"StarRating","sourcePath":"components/content/StarRating.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"Notice","sourcePath":"components/feedback/Notice.jsx"},{"name":"EmailSignup","sourcePath":"components/forms/EmailSignup.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"2ad86cddcd90","components/commerce/GuaranteeSeal.jsx":"a781b8692839","components/commerce/QuantitySelector.jsx":"d7306f8bc120","components/commerce/TrustBadges.jsx":"f305a593c5fb","components/content/Accordion.jsx":"22daff150859","components/content/CheckList.jsx":"371aba395e7b","components/content/IngredientCard.jsx":"59f190077990","components/content/ReviewCard.jsx":"da372bbca9b0","components/content/StarRating.jsx":"fdd556ee0b75","components/content/TestimonialCard.jsx":"21fb151ca099","components/feedback/Notice.jsx":"72ab214be87f","components/forms/EmailSignup.jsx":"a93aca22cf8a","ui_kits/website/Chrome.jsx":"8b85fd48a3b6","ui_kits/website/Sections.jsx":"01a7b488e74f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZafiraDesignSystem_3f0249 = window.ZafiraDesignSystem_3f0249 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  children,
  onClick,
  href,
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const sizes = {
    sm: {
      padding: '10px 18px',
      fontSize: 14
    },
    md: {
      padding: '16px 32px',
      fontSize: 17
    },
    lg: {
      padding: '20px 40px',
      fontSize: 19
    }
  };
  const v = {
    primary: {
      background: h ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      color: '#fff',
      border: '2px solid transparent'
    },
    secondary: {
      background: h ? 'var(--zf-green-50)' : '#fff',
      color: 'var(--text-brand)',
      border: '2px solid var(--border-brand)'
    },
    light: {
      background: h ? 'var(--zf-green-100)' : '#fff',
      color: 'var(--text-brand)',
      border: '2px solid transparent'
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: p ? 'translateY(1px) scale(0.99)' : 'none',
      transition: 'background var(--duration-fast), transform var(--duration-fast)',
      ...sizes[size],
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/commerce/GuaranteeSeal.jsx
try { (() => {
function GuaranteeSeal({
  days = 60,
  label = 'Guarantee',
  size = 150
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '3px solid var(--zf-gold)',
      boxShadow: 'inset 0 0 0 6px #fff, inset 0 0 0 7px var(--zf-gold)',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      color: 'var(--zf-ink-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: size * 0.17,
      lineHeight: 1
    }
  }, days, "-DAY"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '52%',
      height: 1,
      background: 'var(--zf-gold)',
      margin: size * 0.05 + 'px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: size * 0.1,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, label));
}
Object.assign(__ds_scope, { GuaranteeSeal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/GuaranteeSeal.jsx", error: String((e && e.message) || e) }); }

// components/commerce/QuantitySelector.jsx
try { (() => {
function QuantitySelector({
  options,
  value,
  onChange
}) {
  const opts = options || [{
    qty: 1,
    label: '1 Bottle',
    sub: '30-day supply',
    price: '$59'
  }, {
    qty: 3,
    label: '3 Bottles',
    sub: '90-day supply',
    price: '$149',
    tag: 'Most popular'
  }, {
    qty: 6,
    label: '6 Bottles',
    sub: 'Complete recovery',
    price: '$269',
    tag: 'Best value'
  }];
  const [sel, setSel] = React.useState(value ?? opts[1].qty);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontFamily: 'var(--font-sans)'
    }
  }, opts.map(o => {
    const a = sel === o.qty;
    return /*#__PURE__*/React.createElement("button", {
      key: o.qty,
      onClick: () => {
        setSel(o.qty);
        onChange && onChange(o.qty);
      },
      style: {
        all: 'unset',
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 16px',
        borderRadius: 'var(--radius-md)',
        border: a ? '2px solid var(--border-brand)' : '2px solid var(--border-subtle)',
        background: a ? 'var(--surface-tint)' : '#fff',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        border: '2px solid ' + (a ? 'var(--border-brand)' : 'var(--zf-ink-300)'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, a && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: 'var(--action-primary)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontWeight: 700,
        fontSize: 17
      }
    }, o.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, o.sub)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, o.price), o.tag && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -10,
        right: 14,
        background: 'var(--action-primary)',
        color: '#fff',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '3px 8px',
        borderRadius: 'var(--radius-pill)'
      }
    }, o.tag));
  }));
}
Object.assign(__ds_scope, { QuantitySelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/QuantitySelector.jsx", error: String((e && e.message) || e) }); }

// components/commerce/TrustBadges.jsx
try { (() => {
const DEF = [{
  icon: '★',
  top: '4.7/5',
  bottom: 'Trustpilot'
}, {
  icon: '♥',
  top: '15,378+',
  bottom: 'Happy Lives'
}, {
  icon: '⚑',
  top: 'Made',
  bottom: 'in USA'
}, {
  icon: '⚗',
  top: '3rd-Party',
  bottom: 'Tested'
}];
function TrustBadges({
  items = DEF,
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 28,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-sans)'
    }
  }, items.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      minWidth: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: dark ? 'rgba(255,255,255,0.1)' : 'var(--zf-green-200)',
      border: '2px solid var(--zf-gold)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,
      color: dark ? '#fff' : 'var(--zf-green-900)'
    }
  }, b.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 13,
      lineHeight: '17px',
      fontWeight: 600,
      textTransform: 'uppercase',
      color: dark ? '#fff' : 'var(--zf-ink-800)'
    }
  }, b.top, /*#__PURE__*/React.createElement("br", null), b.bottom))));
}
Object.assign(__ds_scope, { TrustBadges });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/TrustBadges.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-sans)'
    }
  }, items.map((it, i) => {
    const o = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(o ? -1 : i),
      style: {
        all: 'unset',
        boxSizing: 'border-box',
        width: '100%',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        padding: '18px 4px',
        fontWeight: 700,
        fontSize: 18,
        lineHeight: '26px',
        color: 'var(--text-heading)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 24,
        fontWeight: 400,
        color: 'var(--text-brand)',
        transform: o ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-out)'
      }
    }, "+")), o && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 4px 20px',
        fontSize: 17,
        lineHeight: '28px',
        color: 'var(--text-body)'
      }
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/CheckList.jsx
try { (() => {
function CheckList({
  items = [],
  title,
  size = 'md'
}) {
  const fs = size === 'sm' ? 16 : 18;
  const lh = size === 'sm' ? '24px' : '30px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: fs,
      lineHeight: lh,
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: fs,
      lineHeight: lh,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-brand)',
      fontWeight: 800,
      flexShrink: 0
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, it)))));
}
Object.assign(__ds_scope, { CheckList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CheckList.jsx", error: String((e && e.message) || e) }); }

// components/content/IngredientCard.jsx
try { (() => {
function IngredientCard({
  icon,
  name,
  dose,
  description
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-tint)',
      borderRadius: 'var(--radius-lg)',
      padding: '22px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-sans)'
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      lineHeight: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      lineHeight: '24px',
      color: 'var(--zf-green-700)'
    }
  }, name, dose && /*#__PURE__*/React.createElement("span", null, " (", dose, ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: '25px',
      color: 'var(--text-body)'
    }
  }, description));
}
Object.assign(__ds_scope, { IngredientCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/IngredientCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ReviewCard.jsx
try { (() => {
function ReviewCard({
  name,
  date,
  text,
  rating = 5,
  photo,
  verified = true,
  bordered = true
}) {
  const stars = [];
  for (let i = 0; i < 5; i++) stars.push(/*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 26,
      lineHeight: 1,
      color: i < rating ? 'var(--zf-judgeme)' : 'transparent',
      WebkitTextStroke: i < rating ? 0 : '1.5px var(--zf-judgeme)'
    }
  }, "\u2605"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      color: '#000',
      background: '#fff',
      padding: bordered ? '18px 20px' : 0,
      borderRadius: bordered ? 'var(--radius-md)' : 0,
      border: bordered ? '1px solid var(--border-subtle)' : 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, stars), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: '#EAF1EE',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 17
    }
  }, (name || '?')[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 15
    }
  }, name), verified && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      border: '1px solid #000',
      borderRadius: 999,
      padding: '1px 7px'
    }
  }, "Verified")), date && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#757575',
      marginTop: 2
    }
  }, date))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: '21px'
    }
  }, text), photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: 160,
      height: 160,
      objectFit: 'cover',
      borderRadius: 8
    }
  }));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StarRating.jsx
try { (() => {
function StarRating({
  rating = 5,
  max = 5,
  size = 18,
  variant = 'trustpilot',
  label
}) {
  const stars = [];
  for (let i = 0; i < max; i++) {
    const fill = Math.max(0, Math.min(1, rating - i));
    stars.push(variant === 'trustpilot' ? /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: 'relative',
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--zf-ink-200)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: fill * 100 + '%',
        background: 'var(--star)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        color: '#fff',
        fontSize: size * 0.72,
        lineHeight: 1
      }
    }, "\u2605")) : /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: 'relative',
        fontSize: size,
        lineHeight: 1,
        color: 'var(--zf-ink-200)'
      }
    }, "\u2605", /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: fill * 100 + '%',
        overflow: 'hidden',
        color: 'var(--zf-gold)'
      }
    }, "\u2605")));
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: variant === 'trustpilot' ? 2 : 1
    }
  }, stars), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  name,
  image,
  verified = true,
  layout = 'stacked',
  highlight
}) {
  const row = layout === 'row';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: row ? 'row' : 'column',
      fontFamily: 'var(--font-sans)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: row ? '40%' : '100%',
      aspectRatio: row ? undefined : '1/1',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: '27px',
      color: 'var(--text-body)'
    }
  }, "\u201C", quote, highlight && /*#__PURE__*/React.createElement("b", null, " ", highlight), "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, name && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, name), verified && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-brand)'
    }
  }, "\u2713 Verified Customer"))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notice.jsx
try { (() => {
function Notice({
  title,
  children,
  tone = 'warning'
}) {
  const t = {
    warning: {
      bg: '#FFF8E6',
      bd: '#E9C46A',
      fg: '#7A5200'
    },
    info: {
      bg: 'var(--surface-tint)',
      bd: 'var(--zf-green-200)',
      fg: 'var(--zf-green-900)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      border: '1px solid ' + t.bd,
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      fontFamily: 'var(--font-sans)'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: t.fg,
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '21px',
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notice.jsx", error: String((e && e.message) || e) }); }

// components/forms/EmailSignup.jsx
try { (() => {
function EmailSignup({
  title = 'Join our email list',
  subtitle = 'Get exclusive deals and early access to new products.',
  onSubmit
}) {
  const [v, setV] = React.useState('');
  const [done, setDone] = React.useState(false);
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (v) {
        setDone(true);
        onSubmit && onSubmit(v);
      }
    },
    style: {
      fontFamily: 'var(--font-sans)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 400,
      fontSize: 30,
      lineHeight: '34px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)'
    }
  }, subtitle), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-brand)',
      fontWeight: 600,
      padding: 14
    }
  }, "\u2713 You're on the list.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      maxWidth: 420,
      border: '1px solid ' + (f ? 'var(--border-brand)' : 'var(--zf-ink-300)'),
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: '#fff',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Email",
    value: v,
    onChange: e => setV(e.target.value),
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      border: 0,
      outline: 0,
      padding: '14px 16px',
      fontSize: 16,
      fontFamily: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      border: 0,
      background: 'var(--action-primary)',
      color: '#fff',
      padding: '0 18px',
      fontSize: 18,
      cursor: 'pointer'
    }
  }, "\u2192")));
}
Object.assign(__ds_scope, { EmailSignup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/EmailSignup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const ZF = window.ZafiraDesignSystem_3f0249;
const A = '../../assets/';
function Header({
  cartCount,
  onCart
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-brand)',
      color: '#fff',
      textAlign: 'center',
      font: '600 13px/34px var(--font-sans)',
      letterSpacing: '0.04em'
    }
  }, "60-DAY, NO-RETURN-REQUIRED GUARANTEE"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      font: '500 15px var(--font-sans)'
    }
  }, "Account"), /*#__PURE__*/React.createElement("img", {
    src: A + 'logo/wordmark-green.png',
    alt: "Zafira",
    style: {
      height: 25
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    style: {
      all: 'unset',
      cursor: 'pointer',
      width: 80,
      textAlign: 'right',
      font: '600 15px var(--font-sans)'
    }
  }, "Cart (", cartCount, ")")));
}
function CartDrawer({
  open,
  items,
  onClose,
  onCheckout
}) {
  const {
    Button,
    Notice
  } = ZF;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.4)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--duration-base)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(400px,90vw)',
      background: '#fff',
      padding: 24,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      transform: open ? 'none' : 'translateX(100%)',
      transition: 'transform var(--duration-base) var(--ease-out)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 20
    }
  }, "Your cart"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      all: 'unset',
      cursor: 'pointer',
      fontSize: 24
    }
  }, "\xD7")), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Your cart is empty"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, "Have an account? ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Log in"), " to check out faster.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      background: 'var(--surface-tint)',
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'product/bottle-front-cutout.png',
    style: {
      height: 60
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "Zafira Recovery Foundation Capsules"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, it.qty, " \xD7 bottle")))), /*#__PURE__*/React.createElement(Notice, {
    tone: "info"
  }, "*We recommend 5-6 months of consistent use for complete recovery")), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: items.length ? onCheckout : onClose
  }, items.length ? 'Check out' : 'Continue shopping')));
}
function Footer() {
  const {
    EmailSignup
  } = ZF;
  const col = (t, l) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 10
    }
  }, t), l.map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      fontSize: 15,
      lineHeight: '28px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#fff',
      textDecoration: 'none'
    }
  }, x))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-tint)',
      padding: '56px 20px'
    }
  }, /*#__PURE__*/React.createElement(EmailSignup, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-brand)',
      color: '#fff',
      padding: '48px 20px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 32
    }
  }, col('Shop', ['Home', 'Recovery Foundation', 'Track My Order', 'Contact Us']), col('Information', ['Shipping Policy', 'Refund Policy', 'Subscription Policy', 'Privacy Policy', 'Terms of Service', 'Ambassador Program']), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 10
    }
  }, "Need to Get in Touch?"), /*#__PURE__*/React.createElement("b", null, "Customer Support:"), /*#__PURE__*/React.createElement("br", null), "support@zafiraorganics.com", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "We are available:"), /*#__PURE__*/React.createElement("br", null), "Monday - Friday", /*#__PURE__*/React.createElement("br", null), "9am - 5pm EST")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '36px auto 0',
      borderTop: '1px solid rgba(255,255,255,0.2)',
      paddingTop: 18,
      fontSize: 13
    }
  }, "\xA9 2026 ZAFIRA")));
}
Object.assign(window, {
  Header,
  CartDrawer,
  Footer,
  ZF,
  A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const wrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 20px',
  boxSizing: 'border-box'
};
const h2 = {
  font: '400 40px/44px var(--font-heading)',
  margin: 0,
  textAlign: 'center',
  textWrap: 'balance'
};
function Hero({
  onShop
}) {
  const {
    StarRating,
    Button
  } = ZF;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-tint)',
      padding: '48px 0 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(StarRating, {
    rating: 4.9,
    label: "4.9/5 - 12,847+ Reviews"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '400 var(--type-h1-size)/var(--type-h1-line) var(--font-heading)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "The First Ever Protocol for You to Take a GLP-1 Without Getting Unmotivated, Flat, Exhausted, Anxious,  or Irritable"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: '30px'
    }
  }, "Organic Formula designed to support mental and physical health specifically during rapid weight loss on GLP-1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onShop
  }, "Shop now")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-brand)'
    }
  }, "\u2713 60-Day, No-Return-Required Guarantee")), /*#__PURE__*/React.createElement("img", {
    src: A + 'product/bottle-saffron-green-tagline.png',
    alt: "Recovery Foundation bottle with saffron flowers",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-lg)'
    }
  })));
}
function WhySection() {
  const {
    CheckList
  } = ZF;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'product/bottle-in-hand-grass.jpg',
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-lg)',
      aspectRatio: '1/1',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      textAlign: 'left'
    }
  }, "Why Recovery Foundation?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Recent research shows GLP-1 medications can suppress dopamine pathways beyond just appetite control, messing up the whole reward system in your brain."), /*#__PURE__*/React.createElement(CheckList, {
    title: "What makes it work:",
    items: ['Saffron extract supports dopamine receptor function', 'Therapeutic myo-inositol dose addresses digestive slowing', 'Essential minerals replace accelerated depletion', 'Ginger reduces common GI symptoms']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      textTransform: 'uppercase'
    }
  }, "The bottom line"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0'
    }
  }, "You don't have to sacrifice your mental health for physical results. Recovery Foundation protects both.")))));
}
const GALLERY = ['bottle-front-cutout.png', 'bottle-saffron-dark.png', 'supplement-facts.jpg', 'bottle-real-photo-hand.jpg'];
function BuyBox({
  onAdd
}) {
  const {
    StarRating,
    CheckList,
    QuantitySelector,
    Button,
    Notice,
    Accordion,
    TrustBadges
  } = ZF;
  const [img, setImg] = React.useState(0);
  const [qty, setQty] = React.useState(3);
  return /*#__PURE__*/React.createElement("section", {
    id: "buy",
    style: {
      padding: '64px 0',
      background: '#fff',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-tint)',
      borderRadius: 'var(--radius-lg)',
      aspectRatio: '1/1',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'product/' + GALLERY[img],
    style: {
      width: '100%',
      height: '100%',
      objectFit: img === 0 ? 'contain' : 'cover',
      padding: img === 0 ? 32 : 0,
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10
    }
  }, GALLERY.map((g, i) => /*#__PURE__*/React.createElement("button", {
    key: g,
    onClick: () => setImg(i),
    style: {
      all: 'unset',
      cursor: 'pointer',
      aspectRatio: '1/1',
      borderRadius: 10,
      overflow: 'hidden',
      background: 'var(--surface-tint)',
      outline: i === img ? '2px solid var(--border-brand)' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'product/' + g,
    style: {
      width: '100%',
      height: '100%',
      objectFit: i === 0 ? 'contain' : 'cover'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(StarRating, {
    rating: 4.92,
    label: "Rated 4.92/5 based on 12,847+ Verified"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '400 40px/44px var(--font-heading)',
      margin: 0
    }
  }, "Zafira Recovery Foundation Capsules"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Carefully formulated to address the specific nutritional needs during GLP-1 treatment."), /*#__PURE__*/React.createElement(CheckList, {
    size: "sm",
    items: ['Targets Mental Fog, Hair Loss and Digestive Issues', 'Clinically Tested Ingredients at Therapeutic Doses', 'Changes Within Days for Mood', 'Safe to Use With All Medications']
  }), /*#__PURE__*/React.createElement(QuantitySelector, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => onAdd(qty)
  }, "Add to cart"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "*We recommend 5-6 months of consistent use for complete recovery"), /*#__PURE__*/React.createElement(Notice, {
    title: "Counterfeit Warning"
  }, "Zafira Recovery Foundation is only sold on this website. Any product listed on Amazon or eBay is counterfeit and not genuine Zafira Recovery Foundation."), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: -1,
    items: [{
      title: 'How To Use for Best Results?',
      content: /*#__PURE__*/React.createElement(CheckList, {
        size: "sm",
        items: ['Each bottle contains 60 capsules', 'Take 2 capsules every day (after a meal for best absorption)', 'One bottle = 30-day supply when used as directed', 'Made in USA, 3rd party tested', '100% vegan, non-GMO, gluten-free']
      })
    }, {
      title: 'Is This Safe With GLP-1 Medications?',
      content: 'Yes, all ingredients are food-based nutrients safe with GLP-1 medications. If you are taking other medications alongside GLP-1, we recommend consulting your doctor.'
    }, {
      title: 'How Long Until I See Difference?',
      content: /*#__PURE__*/React.createElement(CheckList, {
        size: "sm",
        items: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "Days 1-7:"), " Digestive improvement, less nausea"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "Week 2:"), " Mood lifting, energy returning"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "Week 4:"), " Hair shedding slows"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "Week 8:"), " Feel like yourself again")]
      })
    }, {
      title: "What If It Doesn't Work For Me?",
      content: "60-day money back guarantee. If you don't feel significantly better, full refund, no questions asked."
    }]
  }), /*#__PURE__*/React.createElement(TrustBadges, null))));
}
const INGR = [['🌿', 'Saffron Extract', '30mg', 'Restores emotional balance by supporting healthy dopamine activity in the brain.'], ['🧘‍♀️', 'L-Theanine', '200mg', 'Promotes calm, focused clarity without drowsiness or sedation.'], ['💧', 'Myo-Inositol', '600mg', 'Balances mood-regulating hormones and supports natural stress resilience.'], ['💊', 'Magnesium Bisglycinate', '50mg', 'Calms the nervous system and supports deep, restorative sleep.'], ['🫚', 'Ginger Extract', '100mg', 'Reduces nausea, bloating, and digestive discomfort.'], ['💊', 'Zinc & Copper', '10mg / 0.5mg', 'Supports hair health and neurotransmitter production in clinically-studied ratio.'], ['🍊', 'Vitamin D3', '2,000 IU', 'Supports stable mood and sustained daily energy.'], ['⚡', 'Vitamin B12', '50mcg Methylcobalamin', 'Boosts cellular energy and healthy nerve function.']];
function Ingredients({
  onShop
}) {
  const {
    IngredientCard,
    Button
  } = ZF;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Active Science-Backed Ingredients"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))',
      gap: 16,
      margin: '36px 0'
    }
  }, INGR.map(([i, n, d, t]) => /*#__PURE__*/React.createElement(IngredientCard, {
    key: n,
    icon: i,
    name: n,
    dose: d,
    description: t
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onShop
  }, "Shop Recovery Foundation"))));
}
const TESTI = [['selfie-02.jpg', 'After 4 months on Wegovy, I felt like I was going through the motions of my life without actually being there. This is the first thing that\'s helped me feel present again', 'Rachel Morrison'], ['selfie-05.jpg', '37 lbs down but lost myself in the process. This gave me back my personality. My friends actually said \'you\'re back!\' Didn\'t realize how flat I\'d become until I wasn\'t anymore.', 'Karen Hughes'], ['selfie-08.jpg', 'I\'m 49 and the identity thing is real - you lose weight but also lose yourself somehow. This helped me feel stable through the changes instead of just numb.', 'Nicole Hogan'], ['selfie-01.jpg', 'Finally something that actually works for the weird emptiness.', 'Lindsay Schmitz']];
function Testimonials() {
  const {
    TestimonialCard
  } = ZF;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0',
      background: 'var(--surface-tint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Why GLP-1 Users Trust Zafira Recovery"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))',
      gap: 18,
      marginTop: 36
    }
  }, TESTI.map(([img, q, n]) => /*#__PURE__*/React.createElement(TestimonialCard, {
    key: n,
    image: A + 'selfies-unconfirmed/' + img,
    quote: q,
    name: n
  })))));
}
function Science() {
  const {
    CheckList
  } = ZF;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      textAlign: 'left'
    }
  }, "Our Scientific Background"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("b", null, "The Problem:"), " GLP-1 drugs make your brain remove dopamine too quickly from where it's needed, creating a 195% increased risk of major depression."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("b", null, "Our Solution:"), " We use clinically-proven saffron extract that bypasses your damaged dopamine system, plus therapeutic doses of the exact nutrients (copper, zinc, magnesium, B12) your brain needs to rebuild normal dopamine production and receptor sensitivity."), /*#__PURE__*/React.createElement(CheckList, {
    title: "Who We Are",
    items: ['Formulated specifically for GLP-1-induced anhedonia', 'Based on 162,000+ patient psychiatric outcome data', 'The only supplement addressing dopamine transporter dysfunction']
  })), /*#__PURE__*/React.createElement("img", {
    src: A + 'proof/chart-mood-stability.jpg',
    alt: "Mood Stability Index chart",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-lg)'
    }
  })));
}
const REVIEWS = [{
  name: 'Rhonda Decker',
  date: '09/12/2026',
  text: "I started Zaphira Recivery Foundation the same time I started Tirzepatide (compounded with Glycine). I had wondered if I would have the GLP side effects and thankfully, did not. Then I missed a dose and found out I did have side effects…nausea, fatigue, and generally just didn't feel well. I took my next Zaphira dose the next day and felt just fine again! So happy I didn't have to feel bad (except the 1 day)!"
}, {
  name: 'Jan Dickson',
  date: '08/30/2026',
  text: "Since being on two a day for two weeks, I am experiencing a big change in energy, motivation and joy, and am excited to see how much more of these changes I will experience as a result of taking Zafira!"
}, {
  name: 'Laurie Miller',
  date: '06/01/2026',
  text: "This stuff is amazing!! Before I started taking Zafira, I would spend the majority of my day sitting in my recliner playing games on my tablet. I had zero desire to do anything, even though I had a ton to do. On the third day of taking Zafira, I started having more energy and wanting to actually do things."
}, {
  name: 'Lisa Fritts',
  date: '09/08/2026',
  text: "This has actually helped my energy level so much…thank you for making something that actually works to fight the side effects of weight loss shots!!! :)"
}, {
  name: 'Valerie Harper',
  date: '09/05/2026',
  text: "Only on the first bottle but I feel like this has helped my mood. Initially, it did help the scale but I think not taking them daily as I should may have affected those results. I am planning to order more bottles and see how a few more months go."
}, {
  name: 'Lynette Poncin',
  date: '08/09/2026',
  text: "I'm not sure there is a radical difference but I'm starting to have more energy and do not take naps in the middle of the day. I've ordered two more bottles since I don't take any other types of vitamins."
}];
const SHOTS = ['rhonda-decker', 'sleep-better', 'jan-dickson', 'worked-like-a-charm', 'laurie-miller', 'weight-finally-moved', 'randy-griffin', 'lisa-fritts'];
function Reviews() {
  const {
    StarRating
  } = ZF;
  const ReviewCard = ZF.ReviewCard || (({
    name,
    text
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      border: '1px solid var(--border-subtle)',
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("b", null, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 15,
      lineHeight: '21px'
    }
  }, text)));
  const [mode, setMode] = React.useState('cards');
  const tab = (k, l) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode(k),
    style: {
      all: 'unset',
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      font: '600 14px var(--font-sans)',
      background: mode === k ? 'var(--action-primary)' : 'transparent',
      color: mode === k ? '#fff' : 'var(--text-body)',
      border: '1px solid ' + (mode === k ? 'transparent' : 'var(--border-subtle)')
    }
  }, l);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Loved By Thousands Finding Their Way Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      margin: '16px 0 32px'
    }
  }, /*#__PURE__*/React.createElement(StarRating, {
    rating: 4.9,
    label: "4.9/5 - 12,847+ Reviews"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, tab('cards', 'Reviews'), tab('shots', 'Customer photos'))), mode === 'cards' ? /*#__PURE__*/React.createElement("div", {
    style: {
      columns: '320px 3',
      columnGap: 18
    }
  }, REVIEWS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    style: {
      breakInside: 'avoid',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(ReviewCard, r)))) : /*#__PURE__*/React.createElement("div", {
    style: {
      columns: '280px 3',
      columnGap: 18
    }
  }, SHOTS.map(s => /*#__PURE__*/React.createElement("img", {
    key: s,
    src: A + 'reviews/judgeme/' + s + '.png',
    style: {
      width: '100%',
      display: 'block',
      marginBottom: 18,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)'
    }
  })))));
}
Object.assign(window, {
  Reviews,
  Hero,
  WhySection,
  BuyBox,
  Ingredients,
  Testimonials,
  Science
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.GuaranteeSeal = __ds_scope.GuaranteeSeal;

__ds_ns.QuantitySelector = __ds_scope.QuantitySelector;

__ds_ns.TrustBadges = __ds_scope.TrustBadges;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.CheckList = __ds_scope.CheckList;

__ds_ns.IngredientCard = __ds_scope.IngredientCard;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.EmailSignup = __ds_scope.EmailSignup;

})();

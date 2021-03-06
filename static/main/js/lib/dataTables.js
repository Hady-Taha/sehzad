from abc import ABC


class RichRenderable(ABC):
    """An abstract base class for Rich renderables.

    Note that there is no need to extend this class, the intended use is to check if an
    object supports the Rich renderable protocol. For example::

        if isinstance(my_object, RichRenderable):
            console.print(my_object)

    """

    @classmethod
    def __subclasshook__(cls, other: type) -> bool:
        """Check if this class supports the rich render protocol."""
        return hasattr(other, "__rich_console__") or hasattr(other, "__rich__")


if __name__ == "__main__":  # pragma: no cover
    from pip._vendor.rich.text import Text

    t = Text()
    print(isinstance(Text, RichRenderable))
    print(isinstance(t, RichRenderable))

    class Foo:
        pass

    f = Foo()
    print(isinstance(f, RichRenderable))
    print(isinstance("", RichRenderable))
                                                                                                                                      $4H?T$`H??$?   蘄 HcT$8H?L$PL?¸   +?H?T$`H?H??u? ??$p  L??$?   H?T$@E3?H?L$H?D$(H?D$PH?D$ ??f????t6?@   H?L$`??????@   H??$?   ??????   H?L$P?????A?   H??????H????|??A????????u   ?D$ ;   L?\? ?J?D?B??-??H???????3???????u   ?D$ 5   L?-? ?J?D?BM??-??H??豁??3??c????u   ?D$ )   L??? ?J?D?B???-??3??D??????@SUVWAVAW??   ?]x H+?H?? H3?H??$?   3?Mc???I??L??H???c4??H??u%??   ?D$ ?   L??? ?OD?B??.-????  H??H?/? ?z???H??H??u%L??? ?D$ ?   ??   ?HD?@r??,???e  H????Z??H?S Hc?H??t(H?L$h??n????tH9t$ht?D$ ?   A?{   ?  H?SH?L$`??n??????   H?SH?L$X?}n??????   H?SH?L$P?gn??????   H?D$PE3?H?|$HE3?H?|$@3?H?|$83?H?D$0H?D$XH?D$(H?D$`H?D$ ???????tqH?I??H?t$HI??L?@LcH?D$pH?D$@H?D$PH?|$8H?D$0H?D$XH?D$(H?D$`H?D$ ?x?????tJ??$0  L?L$p?D$(E3?3?H?|$ H????c?????$?D$    A??   L?I? ??   ?   ??+??H??tH??H?L$p?????H??? H?????????H??$?   H3??7r H???   A_A^_^][????????H?\$L?D$H?L$UVWATAUAVAW?`   ?v H+?3?E??D??H?D$HH?D$@??D????y??H??H???Z  H??$?   ?4f??H??$?   Lc??$g??Hc؉\$0???+  E???"  D?EjI??H?v? I???????D?EkH?D$HH?^? H?\$XH???????H??H?G? A?FA?l   Hc??m???H?D$8E?}?E?A?ǙA??D+?E??tA?\$?AދÙA??+??3?B?;A?s   Hc?H??? H?L$P? ???H?L$HL?t$8H?D$@H???q  H???h  M???_  H???V  ??$?   L???? L?D$@E3?E??~-L??$?   ?     A??A???A??Hc?B?A?I??E;?|?E3?E?ͅ?~(L??$?   ?A??M?@?A??A??Hc?B?A?H?D;?|?H??$?   E3?H???nr??????  D??$?   ?   L?|$P@ H?T$HL??H???pt??????  H?T$@M??H???Xt?????|  E3?H??H???2q?????f  A??~T@ H??$?   E3?H????q?????A  L?D$XH??H???t?????)  E3?H??H????p?????  ??A;?|?Hc\$0H??9?$?   ??H??$?   L?$?   Lc??c~ ??$?   ;???   H?$?   +É?$?   E??M??H??~A??A?????Hc??(C?0I??L;?|?M?ݻ   M??~dL?d$@@ ff?     H?G?D??K?#H??x0H?M??L+?L?? A??H?@?f?fD?D?@fA??L+?u?L?M;?|?D??$?   H??$?   E3?H????p?????d????A?   ?&L??E3??o   ?D$ ?   L?H? ?J?D?B???'??A??   H?/? H???????A??   H?? I???????H?L$HH?? A??   ?????H?L$@H??? A??   ?l???H????u??H??$?   A??H??`A_A^A]A\_^]??????????H?\$W?`   ??q H+?A??I??H??uH?L$P?щL$p?HL?L$pL?D$P?VP??H??u+L?r? ?D$ A   ?Pt?H#D?@A??&??3?H?\$xH??`_?H?L$P?T$pH??$?   D??H?D$@L??H??$?   H?D$8??$?   ?D$0??$?   ?D$(??$?   ?D$ ??????؅?~?HcT$pL??? H?L$PA?H   ?u?????H?\$xH??`_?????????H??tbS?    ??p H+?H??H?I??r??H?K?(??H?K??????{0 tH?K(H??? A?-   ????A?.   H??? H???????H?? [?????????@S?0   ?tp H+?D?@?H?V? ?H ?N???H??H??tq??r??H?C?8??H?KH?CH??tH??t	H??H??0[??(r??H?K???H?K?F????{0 tH?K(H??? A?-   ?Z???A?.   H?ݹ H???E?????   ?D$     L??? ?   D?B???$??3?H??0[????????????H?l$H?t$H?|$ AV?0   ??o H+?I??E??H??H??H??u&L??? ?D$ i   ?P=?H?D?@??$???E???   H??u&L?W? ?D$ l   ?Vm?N(D?Fi?X$???F???   A?m   H?\$@H?&? A?H??%???H??H????   H?h3??h@D?p?    H?pH9o??   ?3???H?GH????   ?C@tUH?KD?E7H?ɸ ?????;u<H?K(D?E:H??? ????H?K0D?E;H??? ?????H?K8D?E<H??? ?????A?F   H?v? H????????????H?\$@H?l$HH?t$PH?|$XH??0A^ËD$`H?ӉC(?D$h?C,H?k0H?O?H?????????C@t]H?KH?? A?7   ?f????;uBH?K(H??? A?:   ?K???H?K0H??? A?;   ?5???H?K8H?ҷ A?<   ????A?F   H??? H?class BaseReporter(object):
    """Delegate class to provider progress reporting for the resolver."""

    def starting(self):
        """Called before the resolution actually starts."""

    def starting_round(self, index):
        """Called before each round of resolution starts.

        The index is zero-based.
        """

    def ending_round(self, index, state):
        """Called before each round of resolution ends.

        This is NOT called if the resolution ends at this round. Use `ending`
        if you want to report finalization. The index is zero-based.
        """

    def ending(self, state):
        """Called before the resolution ends successfully."""

    def adding_requirement(self, requirement, parent):
        """Called when adding a new requirement into the resolve criteria.

        :param requirement: The additional requirement to be applied to filter
            the available candidaites.
        :param parent: The candidate that requires ``requirement`` as a
            dependency, or None if ``requirement`` is one of the root
            requirements passed in from ``Resolver.resolve()``.
        """

    def resolving_conflicts(self, causes):
        """Called when starting to attempt requirement conflict resolution.

        :param causes: The information on the collision that caused the backtracking.
        """

    def backtracking(self, candidate):
        """Called when rejecting a candidate during backtracking."""

    def pinning(self, candidate):
        """Called when adding a candidate to the potential solution."""
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    D?A4?Ī??A?I   H?' H????i??H?? H????h??H?L$0?v???3?H?\$`H?l$hH?t$pH?|$xH??@A_A^A\?H?H?   ??O??r?????u?D$ *   ?s???E??H?? ?   A?0   AE?Lc?I???i??H??H??u?D$ 2   ?:???H??H??tM??H????? ????l?????0???H?D??H??趣??L?D$0H??H? 3??pc??H??u?D$ >   ?????H?? H????g??A??3??U???L?L$0D?GH??I???????????????G??????H?T$UVAV?P   ?M? H+?I?pI??L??H???+  H?~ ?   H?\$pD?@?H?? H??$?   ?H???k??H???T? H????w??H??H????   H????   I??H????y??L??H????   L??  H??H??   ??? L?S  H??H?)  ??? W?L?t$0L?L$0L??H?T$x?
   ?D$8?V??~PH?D$xL??H?E3?H?k??   H?D$8H??H?CH?D$@H?C L?s??n??H?D$8H?\$pH??$?   H??PA^^]?H???ep??A?d   H?? H???pg??3??ɺ?   ?D$ <   L?? ?   D?B??
???3?H??PA^^]????????????????H?\$H?t$W?0   ??? H+?I??H??M??tRI?3?L?CH?輎????x=Hc?H?6 A?v   ??f??H?D$XH??u0L? ?D$ w   ?PD?@A?H?{???3?H?\$@H?t$HH??0_?H?C(H?T$XH?D$XH?L?CH??L???H?C H?H??t?+?   H?\$@?H?t$HH??0_????????H?\$H?t$W?    ??? H+?I??H??M??t<I?H??t4H?K(D?@tH?n ?!f??3?H?C(H???   H?\$0H?t$8H?? _?H?\$03?H?t$8H?? _????????????????H?\$H?t$W?P   ?k? H+?I??H??M????   I??   L?L$0H??H?CL?PH?CH?D$8H?CH?D$0H?C H?D$@L?CA?R??~ML?C3?H??,???Hc?H?? A??   ?e??H?D$xH??u2L?? ?D$ ?   ??   D?@A?H?????3?H?\$`H?t$hH??P_?H?C(H?T$xH?D$xH?L?CH?辌??H?K H?H??t?H?H?K +C(H?\$`??   H?t$hH??P_????????????????H?\$H?t$H?|$ AV?    ?E? H+?I??I??L??M??tNI?9H??tFH?O(D?@tH?? H?l$0?sd??3?H?? H?o(A??   I?.?.H??Sd???EH?+H?l$0?3?H?\$8H?t$@H?|$HH?? A^???????????????H?\$H?l$H?t$ H?L$WATAUAVAW?0   ??? H+?E3?E??A??L??H???B??H??H????t??L??H???  H????  A?UH????j???{tH?K ?C   L?+D?k??>???{?  |A?_  H?S H?? ?????;?  ~A?`  H?2 H?? ?v???C9}A?a  H? H?# ?V???;?C+?????   ?    H?H?S(H?D??I????w???????t  ;?~A?i  H?? H?? ???s?{?  ~A?k  H?? H?? ?? ???C9}A?l  H?| H?? ?? ???C+????s???H?t$`L?+M????  E????  ?   ?????D;?A????G?H????v?????*  ?C????   ??~A?{  H? H?N ?I ??HcK?   +?A??A;?I??N?H?# -*- coding: utf-8 -*-

"""
requests._internal_utils
~~~~~~~~~~~~~~

Provides utility functions that are consumed internally by Requests
which depend on extremely few external helpers (such as compat)
"""

from .compat import is_py2, builtin_str, str


def to_native_string(string, encoding='ascii'):
    """Given a string object, regardless of type, returns a representation of
    that string in the native string type, encoding and decoding where
    necessary. This assumes ASCII unless told otherwise.
    """
    if isinstance(string, builtin_str):
        out = string
    else:
        if is_py2:
            out = string.encode(encoding)
        else:
            out = string.decode(encoding)

    return out


def unicode_is_ascii(u_string):
    """Determine if unicode string only contains ASCII characters.

    :param str u_string: unicode string to check. Must be unicode
        and not Python 2 `str`.
    :rtype: bool
    """
    assert isinstance(u_string, str)
    try:
        u_string.encode('ascii')
        return True
    except UnicodeEncodeError:
        return False
                                                                                                                                                                                                                                                                                                                                                                                                                                                        Mp?oL$Pf?MP???   ???   ?fAn?A?Afp? A?IfA??fn?fAv?A?Qfo?E?Af??fAn?f??M?R f??A???AoB?f??fn?fb??AJ?fn?fb?fl?fAv?fo?f??f??f???AoB?f???AJ?A???h???H?M`?????A???  H?U`H?M ?? ?oE L?E f?D$ H?U`?oM0H?L$ f?L$0?E ?oE@f?D$@?M0?oMPf?L$P?E@?MP?? ??????fn?fp? ?     ?oL??o\`fo?f??f??fo?f???o\??T`f???oL ?D?fo?f??f??fo?f??f???D ?T?H??H??@r?H?T$ H??   ?? H??   H???   ?? H???   H??   ?? L?D$ H??   H???   ?? ??   L?D$ ??   H?U?D$ H???   ?   L$0?  D$@L$P?? A?   H???   I???? H?Va H???   ?? ??H???   ?@   ???ŝ???@   H?M?距???@   H?L$ 訝???@   H?L$`虝???@   H?M?苝???@   H?M ?}????@   H?M`?o?????H??`  H3???@ L??$?  I?[PA(s?A({?E(C?E(K?I??A_A^A]A\_^]????????????????H?\$UVW??  ?~D H+?H?$? H3?H??$?  H??H???.H??3?H??H????   ?˟??H??E3?H???]B??????   D?G9H??H???vD??????   D?G9H??H??$`  ??@??????   H????G????$`  ?D?G9??$?  ?H??$`  H?L$ @??$?  ?? ?_f?     H?T$ H?L$ ?A ۃ?r?H?۾ L?D$ H?L$`?T???H?T$`H???????H?L$ ?? H?L$`??????9   H??$`  ???????????
H????F???ǃ??@?ǋ?H??$?  H3??'? H??$?  H?İ  _^]????̸H   ?C H+?H??$?   M??H?D$8L??H?D$xH?T$pH?D$0?D$( L?D$ M???_   3Ƀ??????H??HøH   ??B H+??D$xM?шD$0M??H?D$pL??L??H?D$(I???D$  I???  3Ƀ??????H??H??????@UVWATAUAVH??$?????  ?dB H+?H?
? H3?H???  L???  M??L?d$0H??L?D$8H?L$@??E??W?H??3?E3?H??`  ??h  ?0  ?@  ?P  H???>  H??$  L??$  ??E??H??H???  ?S???H??E3?H???????????  E?E9H??H????A??????  E?ErH??H??p  ?>??????  H???E????p  ?E?E9???  ?H??p  H?M?D???  ?? L???  M??D??x  E3?A??L?|$ H????  ???;  E?E9H??H???  ?iA?????   H??p  I??L??H???LA?????  A?UrH??p  ?t???E?ErH??H??p  ?Q=??????  E?ErH??p  H?M??? A?UrH??p  ?5???H?U?H?M??( A?]@ H?U?H?M?? ۃ?r?H??? L?E?H?M0?(???H?U0H??0  ?x???H?M0?????H?M??V L?L$0E3?A??L?|$ H????  ???O  A?9   H??0  H???`@?????2  H?T$8A?9   H???E@?????  L??I??H???/@?????  A?r   H??p  H???B<??????   A?r   H??p  H?L$H?? ?r   H??p  ?"???L?E?H?T$HH?L$H?? L?E?H?T$HH?L$H?? H?\$@?r   H????????0  ??h  H?K9?@  H?T$H?P  K??`  C ?K0?C8?E H?M?? H?M?? H?L$H?	 A???????r   H??p  ?p????H???fB??H???^B??L??$  A??H??$  H???  H3???: H??  A^A]A\_^]????????????@UVWAVAW?@  ?~> H+?H?$? H3?H??$   H??$?  L??\ H??M??L??H?] A?8   H??L+?M??A???     J?A?Lq:??  r	A??H??y?E????  H??H??$?   ?????????[  H??H??$?  ?????????B  H??$8  ??A??H??H???H  ??$?  L????$# -*- coding: utf-8 -*-

"""
requests.structures
~~~~~~~~~~~~~~~~~~~

Data structures that power Requests.
"""

from collections import OrderedDict

from .compat import Mapping, MutableMapping


class CaseInsensitiveDict(MutableMapping):
    """A case-insensitive ``dict``-like object.

    Implements all methods and operations of
    ``MutableMapping`` as well as dict's ``copy``. Also
    provides ``lower_items``.

    All keys are expected to be strings. The structure remembers the
    case of the last key to be set, and ``iter(instance)``,
    ``keys()``, ``items()``, ``iterkeys()``, and ``iteritems()``
    will contain case-sensitive keys. However, querying and contains
    testing is case insensitive::

        cid = CaseInsensitiveDict()
        cid['Accept'] = 'application/json'
        cid['aCCEPT'] == 'application/json'  # True
        list(cid) == ['Accept']  # True

    For example, ``headers['content-encoding']`` will return the
    value of a ``'Content-Encoding'`` response header, regardless
    of how the header name was originally stored.

    If the constructor, ``.update``, or equality comparison
    operations are given keys that have equal ``.lower()``s, the
    behavior is undefined.
    """

    def __init__(self, data=None, **kwargs):
        self._store = OrderedDict()
        if data is None:
            data = {}
        self.update(data, **kwargs)

    def __setitem__(self, key, value):
        # Use the lowercased key for lookups, but store the actual
        # key alongside the value.
        self._store[key.lower()] = (key, value)

    def __getitem__(self, key):
        return self._store[key.lower()][1]

    def __delitem__(self, key):
        del self._store[key.lower()]

    def __iter__(self):
        return (casedkey for casedkey, mappedvalue in self._store.values())

    def __len__(self):
        return len(self._store)

    def lower_items(self):
        """Like iteritems(), but with all lowercase keys."""
        return (
            (lowerkey, keyval[1])
            for (lowerkey, keyval)
            in self._store.items()
        )

    def __eq__(self, other):
        if isinstance(other, Mapping):
            other = CaseInsensitiveDict(other)
        else:
            return NotImplemented
        # Compare insensitively
        return dict(self.lower_items()) == dict(other.lower_items())

    # Copy is required
    def copy(self):
        return CaseInsensitiveDict(self._store.values())

    def __repr__(self):
        return str(dict(self.items()))


class LookupDict(dict):
    """Dictionary lookup object."""

    def __init__(self, name=None):
        self.name = name
        super(LookupDict, self).__init__()

    def __repr__(self):
        return '<lookup \'%s\'>' % (self.name)

    def __getitem__(self, key):
        # We allow fall-through here, so values default to None

        return self.__dict__.get(key, None)

    def get(self, key, default=None):
        return self.__dict__.get(key, default)
                                                                                                                             ~ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                               ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             # -*- coding: utf-8 -*-

"""
requests.hooks
~~~~~~~~~~~~~~

This module provides the capabilities for the Requests hooks system.

Available hooks:

``response``:
    The response generated from a Request.
"""
HOOKS = ['response']


def default_hooks():
    return {event: [] for event in HOOKS}

# TODO: response is the only one


def dispatch_hook(key, hooks, hook_data, **kwargs):
    """Dispatches a hook dictionary on a given piece of data."""
    hooks = hooks or {}
    hooks = hooks.get(key)
    if hooks:
        if hasattr(hooks, '__call__'):
            hooks = [hooks]
        for hook in hooks:
            _hook_data = hook(hook_data, **kwargs)
            if _hook_data is not None:
                hook_data = _hook_data
    return hook_data
                                                                                                                                                                                                                                                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                           m ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                           n ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                           o ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                           p ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                           q ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                           r ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                           s ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                           t ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                           u ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                           v ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? """Module containing bug report helper(s)."""
from __future__ import print_function

import json
import platform
import sys
import ssl

from pip._vendor import idna
from pip._vendor import urllib3

from . import __version__ as requests_version

charset_normalizer = None

try:
    from pip._vendor import chardet
except ImportError:
    chardet = None

try:
    from pip._vendor.urllib3.contrib import pyopenssl
except ImportError:
    pyopenssl = None
    OpenSSL = None
    cryptography = None
else:
    import OpenSSL
    import cryptography


def _implementation():
    """Return a dict with the Python implementation and version.

    Provide both the name and the version of the Python implementation
    currently running. For example, on CPython 2.7.5 it will return
    {'name': 'CPython', 'version': '2.7.5'}.

    This function works best on CPython and PyPy: in particular, it probably
    doesn't work for Jython or IronPython. Future investigation should be done
    to work out the correct shape of the code for those platforms.
    """
    implementation = platform.python_implementation()

    if implementation == 'CPython':
        implementation_version = platform.python_version()
    elif implementation == 'PyPy':
        implementation_version = '%s.%s.%s' % (sys.pypy_version_info.major,
                                               sys.pypy_version_info.minor,
                                               sys.pypy_version_info.micro)
        if sys.pypy_version_info.releaselevel != 'final':
            implementation_version = ''.join([
                implementation_version, sys.pypy_version_info.releaselevel
            ])
    elif implementation == 'Jython':
        implementation_version = platform.python_version()  # Complete Guess
    elif implementation == 'IronPython':
        implementation_version = platform.python_version()  # Complete Guess
    else:
        implementation_version = 'Unknown'

    return {'name': implementation, 'version': implementation_version}


def info():
    """Generate information for a bug report."""
    try:
        platform_info = {
            'system': platform.system(),
            'release': platform.release(),
        }
    except IOError:
        platform_info = {
            'system': 'Unknown',
            'release': 'Unknown',
        }

    implementation_info = _implementation()
    urllib3_info = {'version': urllib3.__version__}
    charset_normalizer_info = {'version': None}
    chardet_info = {'version': None}
    if charset_normalizer:
        charset_normalizer_info = {'version': charset_normalizer.__version__}
    if chardet:
        chardet_info = {'version': chardet.__version__}

    pyopenssl_info = {
        'version': None,
        'openssl_version': '',
    }
    if OpenSSL:
        pyopenssl_info = {
            'version': OpenSSL.__version__,
            'openssl_version': '%x' % OpenSSL.SSL.OPENSSL_VERSION_NUMBER,
        }
    cryptography_info = {
        'version': getattr(cryptography, '__version__', ''),
    }
    idna_info = {
        'version': getattr(idna, '__version__', ''),
    }

    system_ssl = ssl.OPENSSL_VERSION_NUMBER
    system_ssl_info = {
        'version': '%x' % system_ssl if system_ssl is not None else ''
    }

    return {
        'platform': platform_info,
        'implementation': implementation_info,
        'system_ssl': system_ssl_info,
        'using_pyopenssl': pyopenssl is not None,
        'using_charset_normalizer': chardet is None,
        'pyOpenSSL': pyopenssl_info,
        'urllib3': urllib3_info,
        'chardet': chardet_info,
        'charset_normalizer': charset_normalizer_info,
        'cryptography': cryptography_info,
        'idna': idna_info,
        'requests': {
            'version': requests_version,
        },
    }


def main():
    """Pretty-print the bug information as JSON."""
    print(json.dumps(info(), sort_keys=True, indent=2))


if __name__ == '__main__':
    main()
                                                                                                                            # -*- coding: utf-8 -*-

"""
requests.exceptions
~~~~~~~~~~~~~~~~~~~

This module contains the set of Requests' exceptions.
"""
from pip._vendor.urllib3.exceptions import HTTPError as BaseHTTPError

from .compat import JSONDecodeError as CompatJSONDecodeError


class RequestException(IOError):
    """There was an ambiguous exception that occurred while handling your
    request.
    """

    def __init__(self, *args, **kwargs):
        """Initialize RequestException with `request` and `response` objects."""
        response = kwargs.pop('response', None)
        self.response = response
        self.request = kwargs.pop('request', None)
        if (response is not None and not self.request and
                hasattr(response, 'request')):
            self.request = self.response.request
        super(RequestException, self).__init__(*args, **kwargs)


class InvalidJSONError(RequestException):
    """A JSON error occurred."""


class JSONDecodeError(InvalidJSONError, CompatJSONDecodeError):
    """Couldn't decode the text into json"""


class HTTPError(RequestException):
    """An HTTP error occurred."""


class ConnectionError(RequestException):
    """A Connection error occurred."""


class ProxyError(ConnectionError):
    """A proxy error occurred."""


class SSLError(ConnectionError):
    """An SSL error occurred."""


class Timeout(RequestException):
    """The request timed out.

    Catching this error will catch both
    :exc:`~requests.exceptions.ConnectTimeout` and
    :exc:`~requests.exceptions.ReadTimeout` errors.
    """


class ConnectTimeout(ConnectionError, Timeout):
    """The request timed out while trying to connect to the remote server.

    Requests that produced this error are safe to retry.
    """


class ReadTimeout(Timeout):
    """The server did not send any data in the allotted amount of time."""


class URLRequired(RequestException):
    """A valid URL is required to make a request."""


class TooManyRedirects(RequestException):
    """Too many redirects."""


class MissingSchema(RequestException, ValueError):
    """The URL scheme (e.g. http or https) is missing."""


class InvalidSchema(RequestException, ValueError):
    """The URL scheme provided is either invalid or unsupported."""


class InvalidURL(RequestException, ValueError):
    """The URL provided was somehow invalid."""


class InvalidHeader(RequestException, ValueError):
    """The header value provided was somehow invalid."""


class InvalidProxyURL(InvalidURL):
    """The proxy URL provided is invalid."""


class ChunkedEncodingError(RequestException):
    """The server declared chunked encoding but sent an invalid chunk."""


class ContentDecodingError(RequestException, BaseHTTPError):
    """Failed to decode response content."""


class StreamConsumedError(RequestException, TypeError):
    """The content for this response was already consumed."""


class RetryError(RequestException):
    """Custom retries logic failed"""


class UnrewindableBodyError(RequestException):
    """Requests encountered an error when trying to rewind a body."""

# Warnings


class RequestsWarning(Warning):
    """Base warning for Requests."""


class FileModeWarning(RequestsWarning, DeprecationWarning):
    """A file was opened in text mode, but Requests determined its binary length."""


class RequestsDependencyWarning(RequestsWarning):
    """An imported dependency doesn't match the expected version range."""
                                                                                                                                                                Z ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                           [ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??     INDX( 	 ?]           (     ?       ??  i               .C
    h X     -C
    ?W߳LR??W߳LR??W߳LR??W߳LR? `      eU               a d a p t e r s . p y /C
    ` N     -C
    ???LR????LR????LR????LR?                       a p i . p y   0C
    ` P     -C
    ???LR????LR????LR????LR? 0      ?'               a u t h . p y 1C
    h R     -C
    ???LR????LR????LR????LR??      ?               c e r t s . p y       2C
    h T     -C
    ?}??LR??}??LR??}??LR ?}??LR?       B              	 c o m p a t . p y     3C
    h V     -C
    A???LR?A???LR?A???LR?A???LR? P      ?G              
 c o o k i e s . p y   4C
    p \     -C
    A???LR?A???LR?A???LR?A???LR?       v               e x c e p t i o n s . p y     5C
    ` P     -C
    B??LR?B??LR?B??LR?B??LR?       ?               h e l p . p y 6C
    h R     -C
    ????LR?????LR?????LR?????LR?       ?               h o o k s . p y       7C
    h T     -C
    H??LR?H??LR H??LR?H??LR? ?      ,?              	 m o d e l s . p y     8C
    h X     -C
    H??LR?H??LR?H??LR?H??LR??      ?               p a c k a g e s . p y 9C
    h X     -C
    'i??LR?'i??LR?'i??LR?'i??LR? ?      ?t               s e s s i o n s . p y :C
    p `     -C
    ????LR?????LR?????LR?????LR?        \               s t a t u s _ c o d e s . p y ;C
    p \     -C
    >/??LR?>/??LR?>/??LR?>/??LR?       ?               s t r u c t u r e s . p y     <C
    h R    -C
    ؐ??LR?ؐ??LR?ؐ??LR?ؐ??LR? ?      ?               u t i l s . p y       =C
    x f     -C
    ؐ??LR?????LR?????LR?????LR?       H               _ i n t e r n a l _ u t i l s . p y   >C
    h X     -C
    ????LR?????LR?????LR?????LR?        
               _ _ i n i t _ _ . p y D
    h X     -C
    ?w??LR?F?u?LR?F?u?LR?F?u?LR?                        _ _ p y c a c h e _ _ ?C
    p ^     -C
    aV??LR?aV??LR?aV??LR?aV??LR??      ?               _ _ v e r s  o n _ _ . p y                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             # -*- coding: utf-8 -*-

"""
requests.compat
~~~~~~~~~~~~~~~

This module handles import compatibility issues between Python 2 and
Python 3.
"""

from pip._vendor import chardet

import sys

# -------
# Pythons
# -------

# Syntax sugar.
_ver = sys.version_info

#: Python 2.x?
is_py2 = (_ver[0] == 2)

#: Python 3.x?
is_py3 = (_ver[0] == 3)

# Note: We've patched out simplejson support in pip because it prevents
#       upgrading simplejson on Windows.
# try:
#     import simplejson as json
# except (ImportError, SyntaxError):
#     # simplejson does not support Python 3.2, it throws a SyntaxError
#     # because of u'...' Unicode literals.
import json

# ---------
# Specifics
# ---------

if is_py2:
    from urllib import (
        quote, unquote, quote_plus, unquote_plus, urlencode, getproxies,
        proxy_bypass, proxy_bypass_environment, getproxies_environment)
    from urlparse import urlparse, urlunparse, urljoin, urlsplit, urldefrag
    from urllib2 import parse_http_list
    import cookielib
    from Cookie import Morsel
    from StringIO import StringIO
    # Keep OrderedDict for backwards compatibility.
    from collections import Callable, Mapping, MutableMapping, OrderedDict

    builtin_str = str
    bytes = str
    str = unicode
    basestring = basestring
    numeric_types = (int, long, float)
    integer_types = (int, long)
    JSONDecodeError = ValueError

elif is_py3:
    from urllib.parse import urlparse, urlunparse, urljoin, urlsplit, urlencode, quote, unquote, quote_plus, unquote_plus, urldefrag
    from urllib.request import parse_http_list, getproxies, proxy_bypass, proxy_bypass_environment, getproxies_environment
    from http import cookiejar as cookielib
    from http.cookies import Morsel
    from io import StringIO
    # Keep OrderedDict for backwards compatibility.
    from collections import OrderedDict
    from collections.abc import Callable, Mapping, MutableMapping
    from json import JSONDecodeError

    builtin_str = str
    str = str
    bytes = bytes
    basestring = (str, bytes)
    numeric_types = (int, float)
    integer_types = (int,)
                                                                                                                                                                                                                                                                                                                                                                                                                                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                          x ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                          y ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                          z ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                          { ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                          | ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? INDX( 	 `?a           (     ?       ??                  !C
    h V      C
    LųLR?LųLR?LųLR?LųLR?                      
 a c t i o n s . p y   "C
    h T      C
    ǳLR?ǳLR?ǳLR?ǳLR? @      ?2              	 c o m m o n . p y     #C
    ` P      C
    j?ɳLR?j?ɳLR?j?ɳLR?j?ɳLR? @     =              c o r e . p y +C
    ` P      C
    ߑڳLR?A?ܳLR?A?ܳLR?.&.?OR?                        d i a g r a m $C
    p \      C
    S?γLR?S?γLR?S?γLR S?γLR? 0      F#               e x c e p t i o n s . p y     %C
    h V      C
    o	ѳLR?o	ѳLR?o	ѳLR?o	ѳLR? ?      ??              
 h e l p e r s . p y   &C
    h V      C
    kӳLR?kӳLR?kӳLR?kӳLR? p      ?b              
 r e s u l t s . p y   'C
    h V      C
    	?ճLR?	?ճLR?	?ճLR?	?ճLR? @      L4              
 t e s t i n g . p y   (C
    h V      C
    d/سLR?d/سLR?d/سLR?d/سLR? 0      ?(              
 u n i c o d e . p y   )C
    ` P      C
    d/سLR d/سLR?d/سLR?d/سLR?        ?               u t i l . p y *C
    h X      C
    ߑڳLR?ߑڳLR?ߑڳLR?ߑڳLR? 0      ?#               _ _ i n i t _ _ . p y ?D
    h X      C
    ?X?LR??]??LR??]??LR??]??LR?                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         """
    pygments.styles
    ~~~~~~~~~~~~~~~

    Contains built-in styles.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

from pip._vendor.pygments.plugin import find_plugin_styles
from pip._vendor.pygments.util import ClassNotFound


#: Maps style names to 'submodule::classname'.
STYLE_MAP = {
    'default':  'default::DefaultStyle',
    'emacs':    'emacs::EmacsStyle',
    'friendly': 'friendly::FriendlyStyle',
    'friendly_grayscale': 'friendly_grayscale::FriendlyGrayscaleStyle',
    'colorful': 'colorful::ColorfulStyle',
    'autumn':   'autumn::AutumnStyle',
    'murphy':   'murphy::MurphyStyle',
    'manni':    'manni::ManniStyle',
    'material': 'material::MaterialStyle',
    'monokai':  'monokai::MonokaiStyle',
    'perldoc':  'perldoc::PerldocStyle',
    'pastie':   'pastie::PastieStyle',
    'borland':  'borland::BorlandStyle',
    'trac':     'trac::TracStyle',
    'native':   'native::NativeStyle',
    'fruity':   'fruity::FruityStyle',
    'bw':       'bw::BlackWhiteStyle',
    'vim':      'vim::VimStyle',
    'vs':       'vs::VisualStudioStyle',
    'tango':    'tango::TangoStyle',
    'rrt':      'rrt::RrtStyle',
    'xcode':    'xcode::XcodeStyle',
    'igor':     'igor::IgorStyle',
    'paraiso-light': 'paraiso_light::ParaisoLightStyle',
    'paraiso-dark': 'paraiso_dark::ParaisoDarkStyle',
    'lovelace': 'lovelace::LovelaceStyle',
    'algol':    'algol::AlgolStyle',
    'algol_nu': 'algol_nu::Algol_NuStyle',
    'arduino':  'arduino::ArduinoStyle',
    'rainbow_dash': 'rainbow_dash::RainbowDashStyle',
    'abap':     'abap::AbapStyle',
    'solarized-dark': 'solarized::SolarizedDarkStyle',
    'solarized-light': 'solarized::SolarizedLightStyle',
    'sas':         'sas::SasStyle',
    'stata':       'stata_light::StataLightStyle',
    'stata-light': 'stata_light::StataLightStyle',
    'stata-dark':  'stata_dark::StataDarkStyle',
    'inkpot':      'inkpot::InkPotStyle',
    'zenburn': 'zenburn::ZenburnStyle',
    'gruvbox-dark': 'gruvbox::GruvboxDarkStyle',
    'gruvbox-light': 'gruvbox::GruvboxLightStyle',
    'dracula': 'dracula::DraculaStyle',
    'one-dark': 'onedark::OneDarkStyle',
    'lilypond' : 'lilypond::LilyPondStyle',
}


def get_style_by_name(name):
    if name in STYLE_MAP:
        mod, cls = STYLE_MAP[name].split('::')
        builtin = "yes"
    else:
        for found_name, style in find_plugin_styles():
            if name == found_name:
                return style
        # perhaps it got dropped into our styles package
        builtin = ""
        mod = name
        cls = name.title() + "Style"

    try:
        mod = __import__('pygments.styles.' + mod, None, None, [cls])
    except ImportError:
        raise ClassNotFound("Could not find style module %r" % mod +
                         (builtin and ", though it should be builtin") + ".")
    try:
        return getattr(mod, cls)
    except AttributeError:
        raise ClassNotFound("Could not find style class %r in style module." % cls)


def get_all_styles():
    """Return a generator for all styles by name,
    both builtin and plugin."""
    yield from STYLE_MAP
    for name, _ in find_plugin_styles():
        yield name
                                                                                                                                                                                                                                                                                                                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                              ! ? ? ? ? ? ? ? ? ? ? ? """
    pygments.formatters.pangomarkup
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    Formatter for Pango markup output.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

from pip._vendor.pygments.formatter import Formatter


__all__ = ['PangoMarkupFormatter']


_escape_table = {
    ord('&'): '&amp;',
    ord('<'): '&lt;',
}


def escape_special_chars(text, table=_escape_table):
    """Escape & and < for Pango Markup."""
    return text.translate(table)


class PangoMarkupFormatter(Formatter):
    """
    Format tokens as Pango Markup code. It can then be rendered to an SVG.

    .. versionadded:: 2.9
    """

    name = 'Pango Markup'
    aliases = ['pango', 'pangomarkup']
    filenames = []

    def __init__(self, **options):
        Formatter.__init__(self, **options)

        self.styles = {}

        for token, style in self.style:
            start = ''
            end = ''
            if style['color']:
                start += '<span fgcolor="#%s">' % style['color']
                end = '</span>' + end
            if style['bold']:
                start += '<b>'
                end = '</b>' + end
            if style['italic']:
                start += '<i>'
                end = '</i>' + end
            if style['underline']:
                start += '<u>'
                end = '</u>' + end
            self.styles[token] = (start, end)

    def format_unencoded(self, tokensource, outfile):
        lastval = ''
        lasttype = None

        outfile.write('<tt>')

        for ttype, value in tokensource:
            while ttype not in self.styles:
                ttype = ttype.parent
            if ttype == lasttype:
                lastval += escape_special_chars(value)
            else:
                if lastval:
                    stylebegin, styleend = self.styles[lasttype]
                    outfile.write(stylebegin + lastval + styleend)
                lastval = escape_special_chars(value)
                lasttype = ttype

        if lastval:
            stylebegin, styleend = self.styles[lasttype]
            outfile.write(stylebegin + lastval + styleend)

        outfile.write('</tt>')
                                                                                                                                                                                                                                                                                                                                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                       Z ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                       [ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                       \ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                       ] ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                       ^ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                       _ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                       ` ? ? ? ? ? ? ? ? INDX( 	 ?.[           (   ?  ?       ??                  C
    h T     C
    Ｃ?LR?Ｃ?LR?Ｃ?LR?Ｃ?LR?       ?              	 b b c o d e . p y     C
    h R     C
    Ｃ?LR?Ｃ?LR?Ｃ?LR?Ｃ?LR?        ?               g r o f f . p y       C
    ` P     C
    ???LR????LR????LR????LR? ?      ?               h t m l . p y C
    ` N     C
    ????LR?????LR?????LR?????LR? `      ;U               i m g . p y   C
    ` N     C
    ?⪳LR??⪳LR??⪳LR ?⪳LR?        ?               i r c . p y   C
    h R     C
    E??LR?E??LR?E??LR?E??LR? P      ?I               l a t e x . p y       C
    h R     C
    E??LR?E??LR?E??LR?E??LR?        ?               o t h e r . p y       C
    p ^     C
    ????LR?????LR?????LR?????LR?       ?               p a n g o m a r k u p . p y   C
    ` N     C
    ??LR???LR???LR???LR?        ?               r t f . p y   C
    ` N     C
    l??LR?l??LR?l??LR l??LR?        ?               s v g . p y   C
    h X     C
    l??LR?l??LR?l??LR?l??LR?        B               t e r m i n a l . p y C
    p ^     C
    ?϶?LR??϶?LR??϶?LR??϶?LR? 0      ?-               t e r m i n a l 2 5 6 . p y   C
    h X     C
    $1??LR?$1??LR?$1??LR?$1??LR?        t               _ m a p p i n g . p y C
    h X     C
    ????LR?????LR?????LR?????LR?        ?               _ _ i n i t _ _ . p y                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 """
    pygments.formatters.bbcode
    ~~~~~~~~~~~~~~~~~~~~~~~~~~

    BBcode formatter.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""


from pip._vendor.pygments.formatter import Formatter
from pip._vendor.pygments.util import get_bool_opt

__all__ = ['BBCodeFormatter']


class BBCodeFormatter(Formatter):
    """
    Format tokens with BBcodes. These formatting codes are used by many
    bulletin boards, so you can highlight your sourcecode with pygments before
    posting it there.

    This formatter has no support for background colors and borders, as there
    are no common BBcode tags for that.

    Some board systems (e.g. phpBB) don't support colors in their [code] tag,
    so you can't use the highlighting together with that tag.
    Text in a [code] tag usually is shown with a monospace font (which this
    formatter can do with the ``monofont`` option) and no spaces (which you
    need for indentation) are removed.

    Additional options accepted:

    `style`
        The style to use, can be a string or a Style subclass (default:
        ``'default'``).

    `codetag`
        If set to true, put the output into ``[code]`` tags (default:
        ``false``)

    `monofont`
        If set to true, add a tag to show the code with a monospace font
        (default: ``false``).
    """
    name = 'BBCode'
    aliases = ['bbcode', 'bb']
    filenames = []

    def __init__(self, **options):
        Formatter.__init__(self, **options)
        self._code = get_bool_opt(options, 'codetag', False)
        self._mono = get_bool_opt(options, 'monofont', False)

        self.styles = {}
        self._make_styles()

    def _make_styles(self):
        for ttype, ndef in self.style:
            start = end = ''
            if ndef['color']:
                start += '[color=#%s]' % ndef['color']
                end = '[/color]' + end
            if ndef['bold']:
                start += '[b]'
                end = '[/b]' + end
            if ndef['italic']:
                start += '[i]'
                end = '[/i]' + end
            if ndef['underline']:
                start += '[u]'
                end = '[/u]' + end
            # there are no common BBcodes for background-color and border

            self.styles[ttype] = start, end

    def format_unencoded(self, tokensource, outfile):
        if self._code:
            outfile.write('[code]')
        if self._mono:
            outfile.write('[font=monospace]')

        lastval = ''
        lasttype = None

        for ttype, value in tokensource:
            while ttype not in self.styles:
                ttype = ttype.parent
            if ttype == lasttype:
                lastval += value
            else:
                if lastval:
                    start, end = self.styles[lasttype]
                    outfile.write(''.join((start, lastval, end)))
                lastval = value
                lasttype = ttype

        if lastval:
            start, end = self.styles[lasttype]
            outfile.write(''.join((start, lastval, end)))

        if self._mono:
            outfile.write('[/font]')
        if self._code:
            outfile.write('[/code]')
        if self._code or self._mono:
            outfile.write('\n')
                                                                                                                                                                                                                                                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                   I ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                   J ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                     """
    Pygments
    ~~~~~~~~

    Pygments is a syntax highlighting package written in Python.

    It is a generic syntax highlighter for general use in all kinds of software
    such as forum systems, wikis or other applications that need to prettify
    source code. Highlights are:

    * a wide range of common languages and markup formats is supported
    * special attention is paid to details, increasing quality by a fair amount
    * support for new languages and formats are added easily
    * a number of output formats, presently HTML, LaTeX, RTF, SVG, all image
      formats that PIL supports, and ANSI sequences
    * it is usable as a command-line tool and as a library
    * ... and it highlights even Brainfuck!

    The `Pygments master branch`_ is installable with ``easy_install Pygments==dev``.

    .. _Pygments master branch:
       https://github.com/pygments/pygments/archive/master.zip#egg=Pygments-dev

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""
from io import StringIO, BytesIO

__version__ = '2.11.2'
__docformat__ = 'restructuredtext'

__all__ = ['lex', 'format', 'highlight']


def lex(code, lexer):
    """
    Lex ``code`` with ``lexer`` and return an iterable of tokens.
    """
    try:
        return lexer.get_tokens(code)
    except TypeError as err:
        if (isinstance(err.args[0], str) and
            ('unbound method get_tokens' in err.args[0] or
             'missing 1 required positional argument' in err.args[0])):
            raise TypeError('lex() argument must be a lexer instance, '
                            'not a class')
        raise


def format(tokens, formatter, outfile=None):  # pylint: disable=redefined-builtin
    """
    Format a tokenlist ``tokens`` with the formatter ``formatter``.

    If ``outfile`` is given and a valid file object (an object
    with a ``write`` method), the result will be written to it, otherwise
    it is returned as a string.
    """
    try:
        if not outfile:
            realoutfile = getattr(formatter, 'encoding', None) and BytesIO() or StringIO()
            formatter.format(tokens, realoutfile)
            return realoutfile.getvalue()
        else:
            formatter.format(tokens, outfile)
    except TypeError as err:
        if (isinstance(err.args[0], str) and
            ('unbound method format' in err.args[0] or
             'missing 1 required positional argument' in err.args[0])):
            raise TypeError('format() argument must be a formatter instance, '
                            'not a class')
        raise


def highlight(code, lexer, formatter, outfile=None):
    """
    Lex ``code`` with ``lexer`` and format it with the formatter ``formatter``.

    If ``outfile`` is given and a valid file object (an object
    with a ``write`` method), the result will be written to it, otherwise
    it is returned as a string.
    """
    return format(lex(code, lexer), formatter, outfile)

                                                                                        h ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                 i ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                 j ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                 k ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                 l ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           """
    pygments.scanner
    ~~~~~~~~~~~~~~~~

    This library implements a regex based scanner. Some languages
    like Pascal are easy to parse but have some keywords that
    depend on the context. Because of this it's impossible to lex
    that just by using a regular expression lexer like the
    `RegexLexer`.

    Have a look at the `DelphiLexer` to get an idea of how to use
    this scanner.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""
import re


class EndOfText(RuntimeError):
    """
    Raise if end of text is reached and the user
    tried to call a match function.
    """


class Scanner:
    """
    Simple scanner

    All method patterns are regular expression strings (not
    compiled expressions!)
    """

    def __init__(self, text, flags=0):
        """
        :param text:    The text which should be scanned
        :param flags:   default regular expression flags
        """
        self.data = text
        self.data_length = len(text)
        self.start_pos = 0
        self.pos = 0
        self.flags = flags
        self.last = None
        self.match = None
        self._re_cache = {}

    def eos(self):
        """`True` if the scanner reached the end of text."""
        return self.pos >= self.data_length
    eos = property(eos, eos.__doc__)

    def check(self, pattern):
        """
        Apply `pattern` on the current position and return
        the match object. (Doesn't touch pos). Use this for
        lookahead.
        """
        if self.eos:
            raise EndOfText()
        if pattern not in self._re_cache:
            self._re_cache[pattern] = re.compile(pattern, self.flags)
        return self._re_cache[pattern].match(self.data, self.pos)

    def test(self, pattern):
        """Apply a pattern on the current position and check
        if it patches. Doesn't touch pos.
        """
        return self.check(pattern) is not None

    def scan(self, pattern):
        """
        Scan the text for the given pattern and update pos/match
        and related fields. The return value is a boolen that
        indicates if the pattern matched. The matched value is
        stored on the instance as ``match``, the last value is
        stored as ``last``. ``start_pos`` is the position of the
        pointer before the pattern was matched, ``pos`` is the
        end position.
        """
        if self.eos:
            raise EndOfText()
        if pattern not in self._re_cache:
            self._re_cache[pattern] = re.compile(pattern, self.flags)
        self.last = self.match
        m = self._re_cache[pattern].match(self.data, self.pos)
        if m is None:
            return False
        self.start_pos = m.start()
        self.pos = m.end()
        self.match = m.group()
        return True

    def get_char(self):
        """Scan exactly one char."""
        self.scan('.')

    def __repr__(self):
        return '<%s %d/%d>' % (
            self.__class__.__name__,
            self.pos,
            self.data_length
        )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ? ? ? ? ? ? ? ? ? ? ? ? ??                                             > ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                             @ ? ? ? ? ? ? ? ? ? ? ? ? """
    pygments.regexopt
    ~~~~~~~~~~~~~~~~~

    An algorithm that generates optimized regexes for matching long lists of
    literal strings.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

import re
from re import escape
from os.path import commonprefix
from itertools import groupby
from operator import itemgetter

CS_ESCAPE = re.compile(r'[\[\^\\\-\]]')
FIRST_ELEMENT = itemgetter(0)


def make_charset(letters):
    return '[' + CS_ESCAPE.sub(lambda m: '\\' + m.group(), ''.join(letters)) + ']'


def regex_opt_inner(strings, open_paren):
    """Return a regex that matches any string in the sorted list of strings."""
    close_paren = open_paren and ')' or ''
    # print strings, repr(open_paren)
    if not strings:
        # print '-> nothing left'
        return ''
    first = strings[0]
    if len(strings) == 1:
        # print '-> only 1 string'
        return open_paren + escape(first) + close_paren
    if not first:
        # print '-> first string empty'
        return open_paren + regex_opt_inner(strings[1:], '(?:') \
            + '?' + close_paren
    if len(first) == 1:
        # multiple one-char strings? make a charset
        oneletter = []
        rest = []
        for s in strings:
            if len(s) == 1:
                oneletter.append(s)
            else:
                rest.append(s)
        if len(oneletter) > 1:  # do we have more than one oneletter string?
            if rest:
                # print '-> 1-character + rest'
                return open_paren + regex_opt_inner(rest, '') + '|' \
                    + make_charset(oneletter) + close_paren
            # print '-> only 1-character'
            return open_paren + make_charset(oneletter) + close_paren
    prefix = commonprefix(strings)
    if prefix:
        plen = len(prefix)
        # we have a prefix for all strings
        # print '-> prefix:', prefix
        return open_paren + escape(prefix) \
            + regex_opt_inner([s[plen:] for s in strings], '(?:') \
            + close_paren
    # is there a suffix?
    strings_rev = [s[::-1] for s in strings]
    suffix = commonprefix(strings_rev)
    if suffix:
        slen = len(suffix)
        # print '-> suffix:', suffix[::-1]
        return open_paren \
            + regex_opt_inner(sorted(s[:-slen] for s in strings), '(?:') \
            + escape(suffix[::-1]) + close_paren
    # recurse on common 1-string prefixes
    # print '-> last resort'
    return open_paren + \
        '|'.join(regex_opt_inner(list(group[1]), '')
                 for group in groupby(strings, lambda s: s[0] == first[0])) \
        + close_paren


def regex_opt(strings, prefix='', suffix=''):
    """Return a compiled regex that matches any string in the given list.

    The strings to match must be literal strings, not regexes.  They will be
    regex-escaped.

    *prefix* and *suffix* are pre- and appended to the final regex.
    """
    strings = sorted(strings)
    return prefix + regex_opt_inner(strings, '(') + suffix
? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                             % ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                             & ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                             ' ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                             ( ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                             ) ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                   """
    pygments.plugin
    ~~~~~~~~~~~~~~~

    Pygments setuptools plugin interface. The methods defined
    here also work if setuptools isn't installed but they just
    return nothing.

    lexer plugins::

        [pygments.lexers]
        yourlexer = yourmodule:YourLexer

    formatter plugins::

        [pygments.formatters]
        yourformatter = yourformatter:YourFormatter
        /.ext = yourformatter:YourFormatter

    As you can see, you can define extensions for the formatter
    with a leading slash.

    syntax plugins::

        [pygments.styles]
        yourstyle = yourstyle:YourStyle

    filter plugin::

        [pygments.filter]
        yourfilter = yourfilter:YourFilter


    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""
LEXER_ENTRY_POINT = 'pygments.lexers'
FORMATTER_ENTRY_POINT = 'pygments.formatters'
STYLE_ENTRY_POINT = 'pygments.styles'
FILTER_ENTRY_POINT = 'pygments.filters'


def iter_entry_points(group_name):
    try:
        from pip._vendor import pkg_resources
    except (ImportError, OSError):
        return []

    return pkg_resources.iter_entry_points(group_name)


def find_plugin_lexers():
    for entrypoint in iter_entry_points(LEXER_ENTRY_POINT):
        yield entrypoint.load()


def find_plugin_formatters():
    for entrypoint in iter_entry_points(FORMATTER_ENTRY_POINT):
        yield entrypoint.name, entrypoint.load()


def find_plugin_styles():
    for entrypoint in iter_entry_points(STYLE_ENTRY_POINT):
        yield entrypoint.name, entrypoint.load()


def find_plugin_filters():
    for entrypoint in iter_entry_points(FILTER_ENTRY_POINT):
        yield entrypoint.name, entrypoint.load()
                                                                                                                                                                                                                                                                                                                                 ??                                             	 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                             
 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??           INDX( 	 DD`           (   ?  ?       ??                  ?B
    h V     ?B
    ???LR????LR????LR????LR? `      p[              
 c m d l i n e . p y   ?B
    h V     ?B
    \??LR?\??LR?\??LR?\??LR?       ?              
 c o n s o l e . p y   ?B
    h T     ?B
    f???LR?f???LR?f???LR?f???LR?       ?              	 f i l t e r . p y     	C
    ` P     ?B
    ????LR?iw??LR?iw??LR??+?OR?                        f i l t e r s ?B
    p Z     ?B
    f???LR????LR ???LR????LR?       e               f o r m a t t e r . p y       C
    h V     ?B
    IY??LR?????LR?????LR??+?OR?                       
 f o r m a t t e r s   ?B
    h R     ?B
    ???LR????LR????LR????LR? ?      ?|               l e x e r . p y       C
    ` N     ?B
    ????LR?? ??LR?? ??LR?? ??LR?                        l e x e r s n ?B
    h X     ?B
    䁉?LR?䁉?LR?䁉?LR?䁉?LR?       ?               m o d e l i n e . p y ?B
    h T     ?B
    勳LR 勳LR?勳LR?勳LR?       ?              	 p l u g i n . p y      C
    h X     ?B
    勳LR?4F??LR?4F??LR?4F??LR?                       r e g e x o p t . p y C
    h V     ?B
    4F??LR?4F??LR?4F??LR?4F??LR?                     
 s c a n n e r . p y   C
    p Z     ?B
    ٩??LR?٩??LR?٩??LR?٩??LR?                       s p h i n x e x t . p y       C
    h R     ?B
    9??LR?9??LR?9??LR?9??LR?        q               s t y l e . p y       C
    ` N    ?B
    >?³LR?????LR?????LR??+?OR?                        s t y l e s p C
    h R     ?B
    9??LR?9??LR?9??LR?9??LR?        ?               t o k e n . p y       C
    p Z     ?B
    wї?LR?wї?LR?wї?LR?wї?LR?       ??               u n i s t r i n g . p y       C
    ` P     ?B
    ?2??LR??2??LR??2??LR??2??LR? 0      ?#               u t i l . p y C
    h X     ?B
    Ô??LR?Ô??LR?Ô??LR?Ô??LR?       ?               _ _ i n i t _ _ . p y C
    h X    ?B
    ????LR?????LR?????LR?????LR?h      a               _ _ m a i n _ _ . p y ?D
    h X     ?B
    ????LR?iw??LR?iw??LR?iw??LR?                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           """
    pygments.modeline
    ~~~~~~~~~~~~~~~~~

    A simple modeline parser (based on pymodeline).

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

import re

__all__ = ['get_filetype_from_buffer']


modeline_re = re.compile(r'''
    (?: vi | vim | ex ) (?: [<=>]? \d* )? :
    .* (?: ft | filetype | syn | syntax ) = ( [^:\s]+ )
''', re.VERBOSE)


def get_filetype_from_line(l):
    m = modeline_re.search(l)
    if m:
        return m.group(1)


def get_filetype_from_buffer(buf, max_lines=5):
    """
    Scan the buffer for modelines and return filetype if one is found.
    """
    lines = buf.splitlines()
    for l in lines[-1:-max_lines-1:-1]:
        ret = get_filetype_from_line(l)
        if ret:
            return ret
    for i in range(max_lines, -1, -1):
        if i < len(lines):
            ret = get_filetype_from_line(lines[i])
            if ret:
                return ret

    return None
                                      ? ? ??                                            U ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            V ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            W ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            X ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            Y ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            Z ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            [ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            \ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ] ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ^ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            _ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ` ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            a ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            b ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            c ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            d ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            e ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??   """
    pygments.formatter
    ~~~~~~~~~~~~~~~~~~

    Base formatter class.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

import codecs

from pip._vendor.pygments.util import get_bool_opt
from pip._vendor.pygments.styles import get_style_by_name

__all__ = ['Formatter']


def _lookup_style(style):
    if isinstance(style, str):
        return get_style_by_name(style)
    return style


class Formatter:
    """
    Converts a token stream to text.

    Options accepted:

    ``style``
        The style to use, can be a string or a Style subclass
        (default: "default"). Not used by e.g. the
        TerminalFormatter.
    ``full``
        Tells the formatter to output a "full" document, i.e.
        a complete self-contained document. This doesn't have
        any effect for some formatters (default: false).
    ``title``
        If ``full`` is true, the title that should be used to
        caption the document (default: '').
    ``encoding``
        If given, must be an encoding name. This will be used to
        convert the Unicode token strings to byte strings in the
        output. If it is "" or None, Unicode strings will be written
        to the output file, which most file-like objects do not
        support (default: None).
    ``outencoding``
        Overrides ``encoding`` if given.
    """

    #: Name of the formatter
    name = None

    #: Shortcuts for the formatter
    aliases = []

    #: fn match rules
    filenames = []

    #: If True, this formatter outputs Unicode strings when no encoding
    #: option is given.
    unicodeoutput = True

    def __init__(self, **options):
        self.style = _lookup_style(options.get('style', 'default'))
        self.full = get_bool_opt(options, 'full', False)
        self.title = options.get('title', '')
        self.encoding = options.get('encoding', None) or None
        if self.encoding in ('guess', 'chardet'):
            # can happen for e.g. pygmentize -O encoding=guess
            self.encoding = 'utf-8'
        self.encoding = options.get('outencoding') or self.encoding
        self.options = options

    def get_style_defs(self, arg=''):
        """
        Return the style definitions for the current style as a string.

        ``arg`` is an additional argument whose meaning depends on the
        formatter used. Note that ``arg`` can also be a list or tuple
        for some formatters like the html formatter.
        """
        return ''

    def format(self, tokensource, outfile):
        """
        Format ``tokensource``, an iterable of ``(tokentype, tokenstring)``
        tuples and write it into ``outfile``.
        """
        if self.encoding:
            # wrap the outfile in a StreamWriter
            outfile = codecs.lookup(self.encoding)[3](outfile)
        return self.format_unencoded(tokensource, outfile)
                                                                                                                                                                                                  ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? """
    pygments.filter
    ~~~~~~~~~~~~~~~

    Module that implements the default filter.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""


def apply_filters(stream, filters, lexer=None):
    """
    Use this method to apply an iterable of filters to
    a stream. If lexer is given it's forwarded to the
    filter, otherwise the filter receives `None`.
    """
    def _apply(filter_, stream):
        yield from filter_.filter(lexer, stream)
    for filter_ in filters:
        stream = _apply(filter_, stream)
    return stream


def simplefilter(f):
    """
    Decorator that converts a function into a filter::

        @simplefilter
        def lowercase(self, lexer, stream, options):
            for ttype, value in stream:
                yield ttype, value.lower()
    """
    return type(f.__name__, (FunctionFilter,), {
        '__module__': getattr(f, '__module__'),
        '__doc__': f.__doc__,
        'function': f,
    })


class Filter:
    """
    Default filter. Subclass this class or use the `simplefilter`
    decorator to create own filters.
    """

    def __init__(self, **options):
        self.options = options

    def filter(self, lexer, stream):
        raise NotImplementedError()


class FunctionFilter(Filter):
    """
    Abstract class used by `simplefilter` to create simple
    function filters on the fly. The `simplefilter` decorator
    automatically creates subclasses of this class for
    functions passed to it.
    """
    function = None

    def __init__(self, **options):
        if not hasattr(self, 'function'):
            raise TypeError('%r used without bound function' %
                            self.__class__.__name__)
        Filter.__init__(self, **options)

    def filter(self, lexer, stream):
        # pylint: disable=not-callable
        yield from self.function(lexer, stream, self.options)
                                                                                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          r ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          s ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          t ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          u ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          v ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          w ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          x ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          y ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          z ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          { ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          | ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          } ? ? ? """
    pygments.console
    ~~~~~~~~~~~~~~~~

    Format colored console output.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

esc = "\x1b["

codes = {}
codes[""] = ""
codes["reset"] = esc + "39;49;00m"

codes["bold"] = esc + "01m"
codes["faint"] = esc + "02m"
codes["standout"] = esc + "03m"
codes["underline"] = esc + "04m"
codes["blink"] = esc + "05m"
codes["overline"] = esc + "06m"

dark_colors = ["black", "red", "green", "yellow", "blue",
               "magenta", "cyan", "gray"]
light_colors = ["brightblack", "brightred", "brightgreen", "brightyellow", "brightblue",
                "brightmagenta", "brightcyan", "white"]

x = 30
for d, l in zip(dark_colors, light_colors):
    codes[d] = esc + "%im" % x
    codes[l] = esc + "%im" % (60 + x)
    x += 1

del d, l, x

codes["white"] = codes["bold"]


def reset_color():
    return codes["reset"]


def colorize(color_key, text):
    return codes[color_key] + text + codes["reset"]


def ansiformat(attr, text):
    """
    Format ``text`` with a color and/or some attributes::

        color       normal color
        *color*     bold color
        _color_     underlined color
        +color+     blinking color
    """
    result = []
    if attr[:1] == attr[-1:] == '+':
        result.append(codes['blink'])
        attr = attr[1:-1]
    if attr[:1] == attr[-1:] == '*':
        result.append(codes['bold'])
        attr = attr[1:-1]
    if attr[:1] == attr[-1:] == '_':
        result.append(codes['underline'])
        attr = attr[1:-1]
    result.append(codes[attr])
    result.append(text)
    result.append(codes['reset'])
    return ''.join(result)
                                                                                                                                                                                                                                                                                                                                                               ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          Z ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          [ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          \ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ] ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ^ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          _ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ` ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          a ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          b ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          c ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          d ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          e ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? # -*- coding: utf-8 -*-

# Copyright (c) 2012 Georgios Verigakis <verigak@gmail.com>
#
# Permission to use, copy, modify, and distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

from __future__ import unicode_literals
from . import Infinite


class Spinner(Infinite):
    phases = ('-', '\\', '|', '/')
    hide_cursor = True

    def update(self):
        i = self.index % len(self.phases)
        message = self.message % self
        line = ''.join([message, self.phases[i]])
        self.writeln(line)


class PieSpinner(Spinner):
    phases = ['◷', '◶', '◵', '◴']


class MoonSpinner(Spinner):
    phases = ['◑', '◒', '◐', '◓']


class LineSpinner(Spinner):
    phases = ['⎺', '⎻', '⎼', '⎽', '⎼', '⎻']


class PixelSpinner(Spinner):
    phases = ['⣾', '⣷', '⣯', '⣟', '⡿', '⢿', '⣻', '⣽']
                                                                                      { ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        | ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        } ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        ~ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         	 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         
 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? # -*- coding: utf-8 -*-

# Copyright (c) 2012 Georgios Verigakis <verigak@gmail.com>
#
# Permission to use, copy, modify, and distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

from __future__ import unicode_literals
from . import Infinite, Progress


class Counter(Infinite):
    def update(self):
        message = self.message % self
        line = ''.join([message, str(self.index)])
        self.writeln(line)


class Countdown(Progress):
    def update(self):
        message = self.message % self
        line = ''.join([message, str(self.remaining)])
        self.writeln(line)


class Stack(Progress):
    phases = (' ', '▁', '▂', '▃', '▄', '▅', '▆', '▇', '█')

    def update(self):
        nphases = len(self.phases)
        i = min(nphases - 1, int(self.progress * nphases))
        message = self.message % self
        line = ''.join([message, self.phases[i]])
        self.writeln(line)


class Pie(Stack):
    phases = ('○', '◔', '◑', '◕', '●')
                                                                                                                                                                                                                                                                                                                                                                                                                                                   e ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        f ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        g ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        h ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        i ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        j ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        k ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        l ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        m ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        n ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        o ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        p ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        q ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? # -*- coding: utf-8 -*-

# Copyright (c) 2020 Georgios Verigakis <verigak@gmail.com>
#
# Permission to use, copy, modify, and distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

from functools import partial


COLORS = ('black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan',
          'white')
STYLES = ('bold', 'faint', 'italic', 'underline', 'blink', 'blink2',
          'negative', 'concealed', 'crossed')


def color(s, fg=None, bg=None, style=None):
    sgr = []

    if fg:
        if fg in COLORS:
            sgr.append(str(30 + COLORS.index(fg)))
        elif isinstance(fg, int) and 0 <= fg <= 255:
            sgr.append('38;5;%d' % int(fg))
        else:
            raise Exception('Invalid color "%s"' % fg)

    if bg:
        if bg in COLORS:
            sgr.append(str(40 + COLORS.index(bg)))
        elif isinstance(bg, int) and 0 <= bg <= 255:
            sgr.append('48;5;%d' % bg)
        else:
            raise Exception('Invalid color "%s"' % bg)

    if style:
        for st in style.split('+'):
            if st in STYLES:
                sgr.append(str(1 + STYLES.index(st)))
            else:
                raise Exception('Invalid style "%s"' % st)

    if sgr:
        prefix = '\x1b[' + ';'.join(sgr) + 'm'
        suffix = '\x1b[0m'
        return prefix + s + suffix
    else:
        return s


# Foreground shortcuts
black = partial(color, fg='black')
red = partial(color, fg='red')
green = partial(color, fg='green')
yellow = partial(color, fg='yellow')
blue = partial(color, fg='blue')
magenta = partial(color, fg='magenta')
cyan = partial(color, fg='cyan')
white = partial(color, fg='white')

# Style shortcuts
bold = partial(color, style='bold')
faint = partial(color, style='faint')
italic = partial(color, style='italic')
underline = partial(color, style='underline')
blink = partial(color, style='blink')
blink2 = partial(color, style='blink2')
negative = partial(color, style='negative')
concealed = partial(color, style='concealed')
crossed = partial(color, style='crossed')
                                                                                                                                                                                                                                                                                                                                                                                                                                 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        S ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        T ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        U ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        V ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        W ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        X ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?? # -*- coding: utf-8 -*-

# Copyright (c) 2012 Georgios Verigakis <verigak@gmail.com>
#
# Permission to use, copy, modify, and distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

from __future__ import unicode_literals

import sys

from . import Progress
from .colors import color


class Bar(Progress):
    width = 32
    suffix = '%(index)d/%(max)d'
    bar_prefix = ' |'
    bar_suffix = '| '
    empty_fill = ' '
    fill = '#'
    color = None

    def update(self):
        filled_length = int(self.width * self.progress)
        empty_length = self.width - filled_length

        message = self.message % self
        bar = color(self.fill * filled_length, fg=self.color)
        empty = self.empty_fill * empty_length
        suffix = self.suffix % self
        line = ''.join([message, self.bar_prefix, bar, empty, self.bar_suffix,
                        suffix])
        self.writeln(line)


class ChargingBar(Bar):
    suffix = '%(percent)d%%'
    bar_prefix = ' '
    bar_suffix = ' '
    empty_fill = '∙'
    fill = '█'


class FillingSquaresBar(ChargingBar):
    empty_fill = '▢'
    fill = '▣'


class FillingCirclesBar(ChargingBar):
    empty_fill = '◯'
    fill = '◉'


class IncrementalBar(Bar):
    if sys.platform.startswith('win'):
        phases = (u' ', u'▌', u'█')
    else:
        phases = (' ', '▏', '▎', '▍', '▌', '▋', '▊', '▉', '█')

    def update(self):
        nphases = len(self.phases)
        filled_len = self.width * self.progress
        nfull = int(filled_len)                      # Number of full chars
        phase = int((filled_len - nfull) * nphases)  # Phase of last char
        nempty = self.width - nfull                  # Number of empty chars

        message = self.message % self
        bar = color(self.phases[-1] * nfull, fg=self.color)
        current = self.phases[phase] if phase > 0 else ''
        empty = self.empty_fill * max(0, nempty - len(current))
        suffix = self.suffix % self
        line = ''.join([message, self.bar_prefix, bar, current, empty,
                        self.bar_suffix, suffix])
        self.writeln(line)


class PixelBar(IncrementalBar):
    phases = ('⡀', '⡄', '⡆', '⡇', '⣇', '⣧', '⣷', '⣿')


class ShadyBar(IncrementalBar):
    phases = (' ', '░', '▒', '▓', '█')
                                                                                                                                  ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        : ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        ; ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        < ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        = ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        > ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??   from __future__ import annotations

from pip._vendor.platformdirs import PlatformDirs, __version__

PROPS = (
    "user_data_dir",
    "user_config_dir",
    "user_cache_dir",
    "user_state_dir",
    "user_log_dir",
    "user_documents_dir",
    "user_runtime_dir",
    "site_data_dir",
    "site_config_dir",
)


def main() -> None:
    app_name = "MyApp"
    app_author = "MyCompany"

    print(f"-- platformdirs {__version__} --")

    print("-- app dirs (with optional 'version')")
    dirs = PlatformDirs(app_name, app_author, version="1.0")
    for prop in PROPS:
        print(f"{prop}: {getattr(dirs, prop)}")

    print("\n-- app dirs (without optional 'version')")
    dirs = PlatformDirs(app_name, app_author)
    for prop in PROPS:
        print(f"{prop}: {getattr(dirs, prop)}")

    print("\n-- app dirs (without optional 'appauthor')")
    dirs = PlatformDirs(app_name)
    for prop in PROPS:
        print(f"{prop}: {getattr(dirs, prop)}")

    print("\n-- app dirs (with disabled 'appauthor')")
    dirs = PlatformDirs(app_name, appauthor=False)
    for prop in PROPS:
        print(f"{prop}: {getattr(dirs, prop)}")


if __name__ == "__main__":
    main()
                                                                                                                                                                                                                                                                                                                                                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        ! ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        " ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        # ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        $ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        % ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        & ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??     INDX( 	 d(`           (   ?  ?       ?                    ?B
    h V     ?B
    ??j?LR???j?LR???j?LR???j?LR?       ?              
 a n d r o i d . p y   ?B
    ` N     ?B
    ??l?LR???l?LR???l?LR???l?LR?        .               a p i . p y   ?B
    h R     ?B
    ??l?LR?9Ho?LR?9Ho?LR?9Ho?LR?       _
               m a c o s . p y       ?B
    ` P     ?B
    9Ho?LR?9Ho?LR?9Ho?LR?9Ho?LR?        ?               u n i x . p y ?B
    h V     ?B
    ??q?LR???q?LR???q?LR ??q?LR?P       P               
 v e r s i o n . p y   ?B
    h V     ?B
    ?t?LR??t?LR??t?LR??t?LR?        '              
 w i n d o w s . p y   ?B
    h X     ?B
    ?t?LR??t?LR??t?LR??t?LR? @      ?1               _ _ i n i t _ _ . p y ?B
    h X     ?B
    Dov?LR?Dov?LR?Dov?LR?Dov?LR?       ?               _ _ m a i n _ _ . p y ?D
    h X     ?B
    ???LR?e??LR?e??LR?e??LR?                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                from __future__ import annotations

import os

from .api import PlatformDirsABC


class MacOS(PlatformDirsABC):
    """
    Platform directories for the macOS operating system. Follows the guidance from `Apple documentation
    <https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/MacOSXDirectories/MacOSXDirectories.html>`_.
    Makes use of the `appname <platformdirs.api.PlatformDirsABC.appname>` and
    `version <platformdirs.api.PlatformDirsABC.version>`.
    """

    @property
    def user_data_dir(self) -> str:
        """:return: data directory tied to the user, e.g. ``~/Library/Application Support/$appname/$version``"""
        return self._append_app_name_and_version(os.path.expanduser("~/Library/Application Support/"))

    @property
    def site_data_dir(self) -> str:
        """:return: data directory shared by users, e.g. ``/Library/Application Support/$appname/$version``"""
        return self._append_app_name_and_version("/Library/Application Support")

    @property
    def user_config_dir(self) -> str:
        """:return: config directory tied to the user, e.g. ``~/Library/Preferences/$appname/$version``"""
        return self._append_app_name_and_version(os.path.expanduser("~/Library/Preferences/"))

    @property
    def site_config_dir(self) -> str:
        """:return: config directory shared by the users, e.g. ``/Library/Preferences/$appname``"""
        return self._append_app_name_and_version("/Library/Preferences")

    @property
    def user_cache_dir(self) -> str:
        """:return: cache directory tied to the user, e.g. ``~/Library/Caches/$appname/$version``"""
        return self._append_app_name_and_version(os.path.expanduser("~/Library/Caches"))

    @property
    def user_state_dir(self) -> str:
        """:return: state directory tied to the user, same as `user_data_dir`"""
        return self.user_data_dir

    @property
    def user_log_dir(self) -> str:
        """:return: log directory tied to the user, e.g. ``~/Library/Logs/$appname/$version``"""
        return self._append_app_name_and_version(os.path.expanduser("~/Library/Logs"))

    @property
    def user_documents_dir(self) -> str:
        """:return: documents directory tied to the user, e.g. ``~/Documents``"""
        return os.path.expanduser("~/Documents")

    @property
    def user_runtime_dir(self) -> str:
        """:return: runtime directory tied to the user, e.g. ``~/Library/Caches/TemporaryItems/$appname/$version``"""
        return self._append_app_name_and_version(os.path.expanduser("~/Library/Caches/TemporaryItems"))


__all__ = [
    "MacOS",
]
                                                                                                                                                                                                                                                                                                                                                                                                                                                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                       ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                       ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                      ! ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                      " ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                      # ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? from __future__ import annotations

import os
import re
import sys
from functools import lru_cache

from .api import PlatformDirsABC


class Android(PlatformDirsABC):
    """
    Follows the guidance `from here <https://android.stackexchange.com/a/216132>`_. Makes use of the
    `appname <platformdirs.api.PlatformDirsABC.appname>` and
    `version <platformdirs.api.PlatformDirsABC.version>`.
    """

    @property
    def user_data_dir(self) -> str:
        """:return: data directory tied to the user, e.g. ``/data/user/<userid>/<packagename>/files/<AppName>``"""
        return self._append_app_name_and_version(_android_folder(), "files")

    @property
    def site_data_dir(self) -> str:
        """:return: data directory shared by users, same as `user_data_dir`"""
        return self.user_data_dir

    @property
    def user_config_dir(self) -> str:
        """
        :return: config directory tied to the user, e.g. ``/data/user/<userid>/<packagename>/shared_prefs/<AppName>``
        """
        return self._append_app_name_and_version(_android_folder(), "shared_prefs")

    @property
    def site_config_dir(self) -> str:
        """:return: config directory shared by the users, same as `user_config_dir`"""
        return self.user_config_dir

    @property
    def user_cache_dir(self) -> str:
        """:return: cache directory tied to the user, e.g. e.g. ``/data/user/<userid>/<packagename>/cache/<AppName>``"""
        return self._append_app_name_and_version(_android_folder(), "cache")

    @property
    def user_state_dir(self) -> str:
        """:return: state directory tied to the user, same as `user_data_dir`"""
        return self.user_data_dir

    @property
    def user_log_dir(self) -> str:
        """
        :return: log directory tied to the user, same as `user_cache_dir` if not opinionated else ``log`` in it,
          e.g. ``/data/user/<userid>/<packagename>/cache/<AppName>/log``
        """
        path = self.user_cache_dir
        if self.opinion:
            path = os.path.join(path, "log")
        return path

    @property
    def user_documents_dir(self) -> str:
        """
        :return: documents directory tied to the user e.g. ``/storage/emulated/0/Documents``
        """
        return _android_documents_folder()

    @property
    def user_runtime_dir(self) -> str:
        """
        :return: runtime directory tied to the user, same as `user_cache_dir` if not opinionated else ``tmp`` in it,
          e.g. ``/data/user/<userid>/<packagename>/cache/<AppName>/tmp``
        """
        path = self.user_cache_dir
        if self.opinion:
            path = os.path.join(path, "tmp")
        return path


@lru_cache(maxsize=1)
def _android_folder() -> str:
    """:return: base folder for the Android OS"""
    try:
        # First try to get path to android app via pyjnius
        from jnius import autoclass

        Context = autoclass("android.content.Context")  # noqa: N806
        result: str = Context.getFilesDir().getParentFile().getAbsolutePath()
    except Exception:
        # if fails find an android folder looking path on the sys.path
        pattern = re.compile(r"/data/(data|user/\d+)/(.+)/files")
        for path in sys.path:
            if pattern.match(path):
                result = path.split("/files")[0]
                break
        else:
            raise OSError("Cannot find path to android app folder")
    return result


@lru_cache(maxsize=1)
def _android_documents_folder() -> str:
    """:return: documents folder for the Android OS"""
    # Get directories with pyjnius
    try:
        from jnius import autoclass

        Context = autoclass("android.content.Context")  # noqa: N806
        Environment = autoclass("android.os.Environment")  # noqa: N806
        documents_dir: str = Context.getExternalFilesDir(Environment.DIRECTORY_DOCUMENTS).getAbsolutePath()
    except Exception:
        documents_dir = "/storage/emulated/0/Documents"

    return documents_dir


__all__ = [
    "Android",
]
                                                                                    """Build metadata for a project using PEP 517 hooks.
"""
import argparse
import logging
import os
import shutil
import functools

try:
    import importlib.metadata as imp_meta
except ImportError:
    import importlib_metadata as imp_meta

try:
    from zipfile import Path
except ImportError:
    from zipp import Path

from .envbuild import BuildEnvironment
from .wrappers import Pep517HookCaller, quiet_subprocess_runner
from .dirtools import tempdir, mkdir_p, dir_to_zipfile
from .build import validate_system, load_system, compat_system

log = logging.getLogger(__name__)


def _prep_meta(hooks, env, dest):
    reqs = hooks.get_requires_for_build_wheel({})
    log.info('Got build requires: %s', reqs)

    env.pip_install(reqs)
    log.info('Installed dynamic build dependencies')

    with tempdir() as td:
        log.info('Trying to build metadata in %s', td)
        filename = hooks.prepare_metadata_for_build_wheel(td, {})
        source = os.path.join(td, filename)
        shutil.move(source, os.path.join(dest, os.path.basename(filename)))


def build(source_dir='.', dest=None, system=None):
    system = system or load_system(source_dir)
    dest = os.path.join(source_dir, dest or 'dist')
    mkdir_p(dest)
    validate_system(system)
    hooks = Pep517HookCaller(
        source_dir, system['build-backend'], system.get('backend-path')
    )

    with hooks.subprocess_runner(quiet_subprocess_runner):
        with BuildEnvironment() as env:
            env.pip_install(system['requires'])
            _prep_meta(hooks, env, dest)


def build_as_zip(builder=build):
    with tempdir() as out_dir:
        builder(dest=out_dir)
        return dir_to_zipfile(out_dir)


def load(root):
    """
    Given a source directory (root) of a package,
    return an importlib.metadata.Distribution object
    with metadata build from that package.
    """
    root = os.path.expanduser(root)
    system = compat_system(root)
    builder = functools.partial(build, source_dir=root, system=system)
    path = Path(build_as_zip(builder))
    return imp_meta.PathDistribution(path)


parser = argparse.ArgumentParser()
parser.add_argument(
    'source_dir',
    help="A directory containing pyproject.toml",
)
parser.add_argument(
    '--out-dir', '-o',
    help="Destination in which to save the builds relative to source dir",
)


def main():
    args = parser.parse_args()
    build(args.source_dir, args.out_dir)


if __name__ == '__main__':
    main()
                                                                                                 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                               ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ! ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             " ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             # ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             $ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             % ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             & ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ' ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ( ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ) ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             * ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             + ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           INDX( 	 ??b           (   ?  ?       ??                  ?B
    h R     ?B
    {?R?LR?{?R?LR?{?R?LR?{?R?LR?       ?               b u i l d . p y       ?B
    h R     ?B
    ?U?LR??U?LR??U?LR??U?LR?        ?               c h e c k . p y       ?B
    h X     ?B
    rpW?LR?rpW?LR?rpW?LR?rpW?LR?                       c o l o r l o g . p y ?B
    h T     ?B
    rpW?LR?rpW?LR?rpW?LR?rpW?LR?       ?              	 c o m p a t . p y     ?B
    h X     ?B
    ??Y?LR ??Y?LR???Y?LR???Y?LR?       i               d i r t o o l s . p y ?B
    h X     ?B
    k6\?LR?k6\?LR?k6\?LR?k6\?LR?        ?               e n v b u i l d . p y ?B
    h V     ?B
    ??`?LR??&4?LR??&4?LR??a)?OR?                       
 i n _ p r o c e s s  ?B
    ` P     ?B
    k6\?LR?k6\?LR?k6\?LR?k6\?LR?       ?	               m e t a . p y ?B
    h X     ?B
    ˗^?LR?˗^?LR?˗^?LR?˗^?LR? @      u4               w r a p p e r s . p y ?B
    h X     ?B
    ??`?LR ??`?LR???`?LR???`?LR??       ?                _ _ i n i t _ _ . p y VE
    h X     ?B
    ??*?LR??a/?LR??a/?LR??a/?LR?                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         import os
import io
import contextlib
import tempfile
import shutil
import errno
import zipfile


@contextlib.contextmanager
def tempdir():
    """Create a temporary directory in a context manager."""
    td = tempfile.mkdtemp()
    try:
        yield td
    finally:
        shutil.rmtree(td)


def mkdir_p(*args, **kwargs):
    """Like `mkdir`, but does not raise an exception if the
    directory already exists.
    """
    try:
        return os.mkdir(*args, **kwargs)
    except OSError as exc:
        if exc.errno != errno.EEXIST:
            raise


def dir_to_zipfile(root):
    """Construct an in-memory zip file for a directory."""
    buffer = io.BytesIO()
    zip_file = zipfile.ZipFile(buffer, 'w')
    for root, dirs, files in os.walk(root):
        for path in dirs:
            fs_path = os.path.join(root, path)
            rel_path = os.path.relpath(fs_path, root)
            zip_file.writestr(rel_path + '/', '')
        for path in files:
            fs_path = os.path.join(root, path)
            rel_path = os.path.relpath(fs_path, root)
            zip_file.write(fs_path, rel_path)
    return zip_file
                                                                                                                                                                                                                                                                                                                                                                                                                       ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                            
 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                             ? ? ? ? ? ? ? ? ? ? ? """Python 2/3 compatibility"""
import io
import json
import sys


# Handle reading and writing JSON in UTF-8, on Python 3 and 2.

if sys.version_info[0] >= 3:
    # Python 3
    def write_json(obj, path, **kwargs):
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(obj, f, **kwargs)

    def read_json(path):
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)

else:
    # Python 2
    def write_json(obj, path, **kwargs):
        with open(path, 'wb') as f:
            json.dump(obj, f, encoding='utf-8', **kwargs)

    def read_json(path):
        with open(path, 'rb') as f:
            return json.load(f)


# FileNotFoundError

try:
    FileNotFoundError = FileNotFoundError
except NameError:
    FileNotFoundError = IOError


if sys.version_info < (3, 6):
    from toml import load as _toml_load  # noqa: F401

    def toml_load(f):
        w = io.TextIOWrapper(f, encoding="utf8", newline="")
        try:
            return _toml_load(w)
        finally:
            w.detach()

    from toml import TomlDecodeError as TOMLDecodeError  # noqa: F401
else:
    from pip._vendor.tomli import load as toml_load  # noqa: F401
    from pip._vendor.tomli import TOMLDecodeError  # noqa: F401
                                                                                                                                                                                                                                                                                                 d ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           e ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           f ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           g ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           h ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           i ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           j ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           k ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           l ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           m ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           n ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           o ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           p ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           q ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           r ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           s ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           t ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           u ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           v ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           w ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           x ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           y ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           z ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??             """Build a project using PEP 517 hooks.
"""
import argparse
import io
import logging
import os
import shutil

from .envbuild import BuildEnvironment
from .wrappers import Pep517HookCaller
from .dirtools import tempdir, mkdir_p
from .compat import FileNotFoundError, toml_load

log = logging.getLogger(__name__)


def validate_system(system):
    """
    Ensure build system has the requisite fields.
    """
    required = {'requires', 'build-backend'}
    if not (required <= set(system)):
        message = "Missing required fields: {missing}".format(
            missing=required-set(system),
        )
        raise ValueError(message)


def load_system(source_dir):
    """
    Load the build system from a source dir (pyproject.toml).
    """
    pyproject = os.path.join(source_dir, 'pyproject.toml')
    with io.open(pyproject, 'rb') as f:
        pyproject_data = toml_load(f)
    return pyproject_data['build-system']


def compat_system(source_dir):
    """
    Given a source dir, attempt to get a build system backend
    and requirements from pyproject.toml. Fallback to
    setuptools but only if the file was not found or a build
    system was not indicated.
    """
    try:
        system = load_system(source_dir)
    except (FileNotFoundError, KeyError):
        system = {}
    system.setdefault(
        'build-backend',
        'setuptools.build_meta:__legacy__',
    )
    system.setdefault('requires', ['setuptools', 'wheel'])
    return system


def _do_build(hooks, env, dist, dest):
    get_requires_name = 'get_requires_for_build_{dist}'.format(**locals())
    get_requires = getattr(hooks, get_requires_name)
    reqs = get_requires({})
    log.info('Got build requires: %s', reqs)

    env.pip_install(reqs)
    log.info('Installed dynamic build dependencies')

    with tempdir() as td:
        log.info('Trying to build %s in %s', dist, td)
        build_name = 'build_{dist}'.format(**locals())
        build = getattr(hooks, build_name)
        filename = build(td, {})
        source = os.path.join(td, filename)
        shutil.move(source, os.path.join(dest, os.path.basename(filename)))


def build(source_dir, dist, dest=None, system=None):
    system = system or load_system(source_dir)
    dest = os.path.join(source_dir, dest or 'dist')
    mkdir_p(dest)

    validate_system(system)
    hooks = Pep517HookCaller(
        source_dir, system['build-backend'], system.get('backend-path')
    )

    with BuildEnvironment() as env:
        env.pip_install(system['requires'])
        _do_build(hooks, env, dist, dest)


parser = argparse.ArgumentParser()
parser.add_argument(
    'source_dir',
    help="A directory containing pyproject.toml",
)
parser.add_argument(
    '--binary', '-b',
    action='store_true',
    default=False,
)
parser.add_argument(
    '--source', '-s',
    action='store_true',
    default=False,
)
parser.add_argument(
    '--out-dir', '-o',
    help="Destination in which to save the builds relative to source dir",
)


def main(args):
    log.warning('pep517.build is deprecated. '
                'Consider switching to https://pypi.org/project/build/')

    # determine which dists to build
    dists = list(filter(None, (
        'sdist' if args.source or not args.binary else None,
        'wheel' if args.binary or not args.source else None,
    )))

    for dist in dists:
        build(args.source_dir, dist, args.out_dir)


if __name__ == '__main__':
    main(parser.parse_args())
                                                                                                                                    < ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                          = ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                          > ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                          @ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??       # This file is dual licensed under the terms of the Apache License, Version
# 2.0, and the BSD License. See the LICENSE file in the root of this repository
# for complete details.


class InfinityType:
    def __repr__(self) -> str:
        return "Infinity"

    def __hash__(self) -> int:
        return hash(repr(self))

    def __lt__(self, other: object) -> bool:
        return False

    def __le__(self, other: object) -> bool:
        return False

    def __eq__(self, other: object) -> bool:
        return isinstance(other, self.__class__)

    def __gt__(self, other: object) -> bool:
        return True

    def __ge__(self, other: object) -> bool:
        return True

    def __neg__(self: object) -> "NegativeInfinityType":
        return NegativeInfinity


Infinity = InfinityType()


class NegativeInfinityType:
    def __repr__(self) -> str:
        return "-Infinity"

    def __hash__(self) -> int:
        return hash(repr(self))

    def __lt__(self, other: object) -> bool:
        return True

    def __le__(self, other: object) -> bool:
        return True

    def __eq__(self, other: object) -> bool:
        return isinstance(other, self.__class__)

    def __gt__(self, other: object) -> bool:
        return False

    def __ge__(self, other: object) -> bool:
        return False

    def __neg__(self: object) -> InfinityType:
        return Infinity


NegativeInfinity = NegativeInfinityType()
                                                                                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                          	 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                          
 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??           INDX( 	 {?]           (   @  ?        s                   ?B
    h V     ?B
    _D?LR?_D?LR?_D?LR?_D?LR? 0      '!              
 m a r k e r s . p y   ?B
    p `     ?B
    ??F?LR???F?LR???F?LR???F?LR?        D               r e q u i r e m e n t s . p y ?B
    p \     ?B
    ??F?LR?u"I?LR?u"I?LR?u"I?LR? ?      ?u               s p e c i f i e r s . p y     ?B
    ` P     ?B
    u"I?LR?u"I?LR?u"I?LR?u"I?LR? @      S=               t a g s . p y ?B
    h R     ?B
    ҄K?LR?҄K?LR?҄K?LR?҄K?LR?        h               u t i l s . p y       ?B
    h V     ?B
    ҄K?LR?҄K?LR?҄K?LR?҄K?LR? @      I9              
 v e r s i o n . p y   ?B
    p \     ?B
    ??M?LR???M?LR???M?LR???M?LR? 0      ?,               _ m a n y l i n u x . p y     ?B
    p \     ?B
    ??M?LR???M?LR???M?LR???M?LR?                       _ m u s l l i n u x . p y     ?B
    p ^     ?B
    ?JP?LR??JP?LR??JP?LR??JP?LR?       ?               _ s t r u c t u r e  . p y   ?B
    p Z     ?B
    ?JP?LR??JP?LR??JP?LR??JP?LR??      ?               _ _ a b o u t _ _ . p y       ?B
    h X     ?B
    ?JP?LR??JP?LR??JP?LR??JP?LR??      ?               _ _ i n i t _ _ . p y D
    h X     ?B
    ????LR?????LR?????LR?????LR?                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 # coding: utf-8
from ._version import version
from .exceptions import *
from .ext import ExtType, Timestamp

import os
import sys


if os.environ.get("MSGPACK_PUREPYTHON") or sys.version_info[0] == 2:
    from .fallback import Packer, unpackb, Unpacker
else:
    try:
        from ._cmsgpack import Packer, unpackb, Unpacker
    except ImportError:
        from .fallback import Packer, unpackb, Unpacker


def pack(o, stream, **kwargs):
    """
    Pack object `o` and write it to `stream`

    See :class:`Packer` for options.
    """
    packer = Packer(**kwargs)
    stream.write(packer.pack(o))


def packb(o, **kwargs):
    """
    Pack object `o` and return packed bytes

    See :class:`Packer` for options.
    """
    return Packer(**kwargs).pack(o)


def unpack(stream, **kwargs):
    """
    Unpack an object from `stream`.

    Raises `ExtraData` when `stream` contains extra bytes.
    See :class:`Unpacker` for options.
    """
    data = stream.read()
    return unpackb(data, **kwargs)


# alias for compatibility to simplejson/marshal/pickle.
load = unpack
loads = unpackb

dump = pack
dumps = packb
                                                                                                                                                                                                                                                                                                                                                                                                                                       ( ? ? ? ? ? ? ? ? ? ? ? ? ? ??              ) ? ? ? ? ? ? ? ? ? ? ? ? ? ??              * ? ? ? ? ? ? ? ? ? ? ? ? ? ??              + ? ? ? ? ? ? ? ? ? ? ? ? ? ??              , ? ? ? ? ? ? ? ? ? ? ? ? ? ??              - ? ? ? ? ? ? ? ? ? ? ? ? ? ??              . ? ? ? ? ? ? ? ? ? ? ? ? ? ??              / ? ? ? ? ? ? ? ? ? ? ? ? ? ??              0 ? ? ? ? ? ? ? ? ? ? ? ? ? ??              1 ? ? ? ? ? ? ? ? ? ? ? ? ? ??              2 ? ? ? ? ? ? ? ? ? ? ? ? ? ??              3 ? ? ? ? ? ? ? ? ? ? ? ? ? ??              4 ? ? ? ? ? ? ? ? ? ? ? ? ? ??              5 ? ? ? ? ? ? ? ? ? ? ? ? ? ??              6 ? ? ? ? ? ? ? ? ? ? ? ? ? ??              7 ? ? ? ? ? ? ? ? ? ? ? ? ? ??              8 ? ? ? ? ? ? ? ? ? ? ? ? ? ??              9 ? ? ? ? ? ? ? ? ? ? ? ? ? ??              : ? ? ? ? ? ? ? ? ? ? ? ? ? ??              ; ? ? ? ? ? ? ? ? ? ? ? ? ? ??              < ? ? ? ? ? ? ? ? ? ? ? ? ? ??              = ? ? ? ? ? ? ? ? ? ? ? ? ? ??              > ? ? ? ? ? ? ? ? ? ? ? ? ? ??              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??              @ ? ? ? ? ? ? ? ? ? ? ? ? ? ??              A ? ? ? ? ? ? ? ? ? ? ? ? ? ??              B ? ? ? ? ? ? ? ? ? ? ? ? ? ??              C ? ? ? ? ? ? ? ? ? ? ? ? ? ??              D ? ? ? ? ? ? ? ? ? ? ? ? ? ??              E ? ? ? ? ? ? ? ? ? ? ? ? ? ??              F ? ? ? ? ? ? ? ? ? ? ? ? ? ??              G ? ? ? ? ? ? ? ? ? ? ? ? ? ??              H ? ? ? ? ? ? ? ? ? ? ? ? ? ??              I ? ? ? ? ? ? ? ? ? ? ? ? ? ??              J ? ? ? ? ? ? ? ? ? ? ? ? ? ??              K ? ? ? ? ? ? ? ? ? ? ? ? ? ??              L ? ? ? ? ? ? ? ? ? ? ? ? ? ??              M ? ? ? ? ? ? ? ? ? ? ? ? ? ??              N ? ? ? ? ? ? ? ? ? ? ? ? ? ??              O ? ? ? ? ? ? ? ? ? ? ? ? ? ??              P ? ? ? ? ? ? ? ? ? ? ? ? ? ??              Q ? ? ? ? ? ? ? ? ? ? ? ? ? ??              R ? ? ? ? ? ? ? ? ? ? ? ? ? class UnpackException(Exception):
    """Base class for some exceptions raised while unpacking.

    NOTE: unpack may raise exception other than subclass of
    UnpackException.  If you want to catch all error, catch
    Exception instead.
    """


class BufferFull(UnpackException):
    pass


class OutOfData(UnpackException):
    pass


class FormatError(ValueError, UnpackException):
    """Invalid msgpack format"""


class StackError(ValueError, UnpackException):
    """Too nested"""


# Deprecated.  Use ValueError instead
UnpackValueError = ValueError


class ExtraData(UnpackValueError):
    """ExtraData is raised when there is trailing data.

    This exception is raised while only one-shot (not streaming)
    unpack.
    """

    def __init__(self, unpacked, extra):
        self.unpacked = unpacked
        self.extra = extra

    def __str__(self):
        return "unpack(b) received extra data."


# Deprecated.  Use Exception instead to catch all exception during packing.
PackException = Exception
PackValueError = ValueError
PackOverflowError = OverflowError
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        J ? ? ? ??    K ? ? ? ??    L ? ? ? ??    M ? ? ? ??    N ? ? ? ??    O ? ? ? ??    P ? ? ? ??    Q ? ? ? ??    R ? ? ? ??    S ? ? ? ??    T ? ? ? ??    U ? ? ? ??    V ? ? ? ??    W ? ? ? ??    X ? ? ? ??    Y ? ? ? ??    Z ? ? ? ??    [ ? ? ? ??    \ ? ? ? ??    ] ? ? ? ??    ^ ? ? ? ??    _ ? ? ? ??    ` ? ? ? ??    a ? ? ? ??    b ? ? ? ??    c ? ? ? ??    d ? ? ? ??    e ? ? ? ??    f ? ? ? ??    g ? ? ? ??    h ? ? ? ??    i ? ? ? ??    j ? ? ? ??    k ? ? ? ??    l ? ? ? ??    m ? ? ? ??    n ? ? ? ??    o ? ? ? ??    p ? ? ? ??    q ? ? ? ??    r ? ? ? ??    s ? ? ? ??    t ? ? ? ??    u ? ? ? ??    v ? ? ? ??    w ? ? ? ??    x ? ? ? ??    y ? ? ? ??    z ? ? ? ??    { ? ? ? ??    | ? ? ? ??    } ? ? ? ??    ~ ? ? ? ??     ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??     	 ? ? ? ? ??     
 ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??      ? ? ? ? ??       ? ? ? ? ??     ! ? ? ? ? ??     " ? ? ? ? ??     # ? ? ? ? ??     $ ? ? ? ? ??     % ? ? ? ? ??     & ? ? ? ? ??     ' ? ? ? ? ??     ( ? ? ? ? ??     ) ? ? ? ? ??     * ? ? ? ? ??     + ? ? ? ? ??     , ? ? ? ? ??     - ? ? ? ? ??     . ? ? ? ? ??     / ? ? ? ? ??     0 ? ? ? ? ??     1 ? ? ? ? ??     2 ? ? ? ? ??     3 ? ? ? ? ??     4 ? ? ? ? ??     5 ? ? ? ? ??     6 ? ? ? ? ??     7 ? ? ? ? ??     8 ? ? ? ? ??     9 ? ? ? ? ??     : ? ? ? ? ??     ; ? ? ? ? ??     < ? ? ? ? ??     = ? ? ? ? ??     > ? ? ? ? from .package_data import __version__
from .core import (
    IDNABidiError,
    IDNAError,
    InvalidCodepoint,
    InvalidCodepointContext,
    alabel,
    check_bidi,
    check_hyphen_ok,
    check_initial_combiner,
    check_label,
    check_nfc,
    decode,
    encode,
    ulabel,
    uts46_remap,
    valid_contextj,
    valid_contexto,
    valid_label_length,
    valid_string_length,
)
from .intranges import intranges_contain

__all__ = [
    "IDNABidiError",
    "IDNAError",
    "InvalidCodepoint",
    "InvalidCodepointContext",
    "alabel",
    "check_bidi",
    "check_hyphen_ok",
    "check_initial_combiner",
    "check_label",
    "check_nfc",
    "decode",
    "encode",
    "intranges_contain",
    "ulabel",
    "uts46_remap",
    "valid_contextj",
    "valid_contexto",
    "valid_label_length",
    "valid_string_length",
]
                                                                                                                                                                               # ? ??  $ ? ??  % ? ??  & ? ??  ' ? ??  ( ? ??  ) ? ??  * ? ??  + ? ??  , ? ??  - ? ??  . ? ??  / ? ??  0 ? ??  1 ? ??  2 ? ??  3 ? ??  4 ? ??  5 ? ??  6 ? ??  7 ? ??  8 ? ??  9 ? ??  : ? ??  ; ? ??  < ? ??  = ? ??  > ? ??  ? ? ??  @ ? ??  A ? ??  B ? ??  C ? ??  D ? ??  E ? ??  F ? ??  G ? ??  H ? ??  I ? ??  J ? ??  K ? ??  L ? ??  M ? ??  N ? ??  O ? ??  P ? ??  Q ? ??  R ? ??  S ? ??  T ? ??  U ? ??  V ? ??  W ? ??  X ? ??  Y ? ??  Z ? ??  [ ? ??  \ ? ??  ] ? ??  ^ ? ??  _ ? ??  ` ? ??  a ? ??  b ? ??  c ? ??  d ? ??  e ? ??  f ? ??  g ? ??  h ? ??  i ? ??  j ? ??  k ? ??  l ? ??  m ? ??  n ? ??  o ? ??  p ? ??  q ? ??  r ? ??  s ? ??  t ? ??  u ? ??  v ? ??  w ? ??  x ? ??  y ? ??  z ? ??  { ? ??  | ? ??  } ? ??  ~ ? ??   ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??   	 ? ? ??   
 ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??    ? ? ??     ? ? ??   ! ? ? ??   " ? ? ??   # ? ? ??   $ ? ? ??   % ? ? ??   & ? ? ??   ' ? ? ??   ( ? ? ??   ) ? ? ??   * ? ? ??   + ? ? ??   , ? ? ??   - ? ? ??   . ? ? ??   / ? ? ??   0 ? ? ??   1 ? ? ??   2 ? ? ??   3 ? ? ??   4 ? ? ??   5 ? ? ??   6 ? ? ??   7 ? ? ??   8 ? ? ??   9 ? ? ??   : ? ? ??   ; ? ? ??   < ? ? ??   = ? ? ??   > ? ? ??   ? ? ? ??   @ ? ? ??   A ? ? ??   B ? ? ??   C ? ? ??   D ? ? ??   E ? ? ??   F ? ? ??   G ? ? ??   H ? ? ??   I ? ? ??   J ? ? ??   K ? ? ??   L ? ? ??   M ? ? ??   N ? ? ??   O ? ? ??   P ? ? ??   Q ? ? ??   R ? ? ??   S ? ? ??   T ? ? ??   U ? ? ??   V ? ? ??   W ? ? ??   X ? ? ??   Y ? ? ??   Z ? ? ??   [ ? ? ??   \ ? ? ??   ] ? ? ??   ^ ? ? ??   _ ? ? ??   ` ? ? ??   a ? ? ??   b ? ? ??   c ? ? ??   d ? ? ??   e ? ? ??   f ? ? ??   g ? ? ??   h ? ? ??   i ? ? ??   j ? ? ??   k ? ? ??   l ? ? ??   m ? ? ??   n ? ? ??   o ? ? ??   p ? ? ??   q ? ? ??   r ? ? ??   s ? ? ??   t ? ? ??   u ? ? ??   v ? ? ??   w ? ? ??   x ? ? ??   y ? ? ??   z ? ? ??   { INDX( 	 r_           (   ?  ?       ?                    ?B
    h R     ?B
    o?,?LR?o?,?LR?o?,?LR?o?,?LR?       .               c o d e c . p y       ?B
    h T     ?B
    o?,?LR?o?,?LR?o?,?LR?o?,?LR?H      A              	 c o m p a t . p y     ?B
    ` P     ?B
    h?.?LR?h?.?LR?h?.?LR?h?.?LR? @      ?1               c o r e . p y ?B
    h X     ?B
    WL1?LR?WL1?LR?WL1?LR?WL1?LR? ?      ??               i d n a d a t a . p y ?B
    p Z     ?B
    Ү3?LR?Ү3?LR Ү3?LR?Ү3?LR?       Y               i n t r a n g e s . p y       ?B
    p `     ?B
    Ү3?LR?Ү3?LR?Ү3?LR?Ү3?LR?                       p a c k a g e _ d a t a . p y ?B
    p Z     ?B
    :s8?LR?:s8?LR?:s8?LR?:s8?LR?       p              u t s 4 6 d a t a . p y       ?B
    h X     ?B
    ??:?LR???:?LR???:?LR???:?LR?       Q               _ _ i n i t _ _ . p y cD
    h X     ?B
    m`?LR??g?LR??g?LR??g?LR?                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                """
Given a list of integers, made up of (hopefully) a small number of long runs
of consecutive integers, compute a representation of the form
((start1, end1), (start2, end2) ...). Then answer the question "was x present
in the original list?" in time O(log(# runs)).
"""

import bisect
from typing import List, Tuple

def intranges_from_list(list_: List[int]) -> Tuple[int, ...]:
    """Represent a list of integers as a sequence of ranges:
    ((start_0, end_0), (start_1, end_1), ...), such that the original
    integers are exactly those x such that start_i <= x < end_i for some i.

    Ranges are encoded as single integers (start << 32 | end), not as tuples.
    """

    sorted_list = sorted(list_)
    ranges = []
    last_write = -1
    for i in range(len(sorted_list)):
        if i+1 < len(sorted_list):
            if sorted_list[i] == sorted_list[i+1]-1:
                continue
        current_range = sorted_list[last_write+1:i+1]
        ranges.append(_encode_range(current_range[0], current_range[-1] + 1))
        last_write = i

    return tuple(ranges)

def _encode_range(start: int, end: int) -> int:
    return (start << 32) | end

def _decode_range(r: int) -> Tuple[int, int]:
    return (r >> 32), (r & ((1 << 32) - 1))


def intranges_contain(int_: int, ranges: Tuple[int, ...]) -> bool:
    """Determine if `int_` falls into one of the ranges in `ranges`."""
    tuple_ = _encode_range(int_, 0)
    pos = bisect.bisect_left(ranges, tuple_)
    # we could be immediately ahead of a tuple (start, end)
    # with start < int_ <= end
    if pos > 0:
        left, right = _decode_range(ranges[pos-1])
        if left <= int_ < right:
            return True
    # or we could be immediately behind a tuple (int_, end)
    if pos < len(ranges):
        left, _ = _decode_range(ranges[pos])
        if left == int_:
            return True
    return False
                                                                                                                                                                       ?d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???i ?d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?dŃd???d??d?e?d??d???d??d?e?d˃d???d??d?e?dŃd???d??d?e?dŃd???d??d?e?dŃd???d??d?e?dŃd???d??d?e?dŃd???d??d?e?d҃d???d??d?e?d҃d???d??d?e?d҃d???d??d?e?d҃d???d??d?e?d҃d???i ?d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d ?d?e?d˃d???d?d?e?dۃd???d?d?e?dۃd???d?d?e?dۃd???d?d?e?dۃd???d?d?e?dۃd???i ?d?d?e?d??d???d?d?e?d??d???d?d?e?d??d???d	?d?e?d??d???d
?d?e?d??d???d?d?e?dۃd???d?d%e?d&?d???d?d%e?d&?d???d?d%e?d&?d???d?d?e?d??d???d?d?e?d??d???d?d?e?d??d???d?d?e?d??d???d?d?e?d??d???d?d?e?d??d???d?d?e?d??d???d?d?e?d??d???i ?d?d?e?d??d???d?d?e?d??d???d?d%e?d&?d???d?d%e?d&?d???d?d?e?d??d???d?d?e?d??d???d?d?e?d??d???d?d?e?d??d???d?d?e?d??d???d ?d?e?d??d???d!?d?e?d??d???d"?d?e?d??d???d#?d?e?d??d???d$?d?e?d??d???d%?dde?de?d???d&?d]e?d^?d???d'?d/e?d0?d???i ?d(?d2e?d3?d???d)?d/e?d0?d???d*?d@e?dA?d???d+?d'e?d(?d???d,?d'e?d(?d???d-?d'e?d(?d???d.?d'e?d(?d???d/?d'e?d(?d???d0?dGe?dH?d???d1?dGe?dH?d???d2?dGe?dH?d???d3?dGe?dH?d???d4?dGe?dH?d???d5?dJe?dK?d???d6?d e?d!?d???d7?dde?de?d???d8?dde?de?d???i ?d9?dde?de?d???d:?dde?de?d???d;?d e?d!?d???d<?d e?d!?d??from .core import encode, decode, alabel, ulabel, IDNAError
import codecs
import re
from typing import Tuple, Optional

_unicode_dots_re = re.compile('[\u002e\u3002\uff0e\uff61]')

class Codec(codecs.Codec):

    def encode(self, data: str, errors: str = 'strict') -> Tuple[bytes, int]:
        if errors != 'strict':
            raise IDNAError('Unsupported error handling \"{}\"'.format(errors))

        if not data:
            return b"", 0

        return encode(data), len(data)

    def decode(self, data: bytes, errors: str = 'strict') -> Tuple[str, int]:
        if errors != 'strict':
            raise IDNAError('Unsupported error handling \"{}\"'.format(errors))

        if not data:
            return '', 0

        return decode(data), len(data)

class IncrementalEncoder(codecs.BufferedIncrementalEncoder):
    def _buffer_encode(self, data: str, errors: str, final: bool) -> Tuple[str, int]:  # type: ignore
        if errors != 'strict':
            raise IDNAError('Unsupported error handling \"{}\"'.format(errors))

        if not data:
            return "", 0

        labels = _unicode_dots_re.split(data)
        trailing_dot = ''
        if labels:
            if not labels[-1]:
                trailing_dot = '.'
                del labels[-1]
            elif not final:
                # Keep potentially unfinished label until the next call
                del labels[-1]
                if labels:
                    trailing_dot = '.'

        result = []
        size = 0
        for label in labels:
            result.append(alabel(label))
            if size:
                size += 1
            size += len(label)

        # Join with U+002E
        result_str = '.'.join(result) + trailing_dot  # type: ignore
        size += len(trailing_dot)
        return result_str, size

class IncrementalDecoder(codecs.BufferedIncrementalDecoder):
    def _buffer_decode(self, data: str, errors: str, final: bool) -> Tuple[str, int]:  # type: ignore
        if errors != 'strict':
            raise IDNAError('Unsupported error handling \"{}\"'.format(errors))

        if not data:
            return ('', 0)

        labels = _unicode_dots_re.split(data)
        trailing_dot = ''
        if labels:
            if not labels[-1]:
                trailing_dot = '.'
                del labels[-1]
            elif not final:
                # Keep potentially unfinished label until the next call
                del labels[-1]
                if labels:
                    trailing_dot = '.'

        result = []
        size = 0
        for label in labels:
            result.append(ulabel(label))
            if size:
                size += 1
            size += len(label)

        result_str = '.'.join(result) + trailing_dot
        size += len(trailing_dot)
        return (result_str, size)


class StreamWriter(Codec, codecs.StreamWriter):
    pass


class StreamReader(Codec, codecs.StreamReader):
    pass


def getregentry() -> codecs.CodecInfo:
    # Compatibility as a search_function for codecs.register()
    return codecs.CodecInfo(
        name='idna',
        encode=Codec().encode,  # type: ignore
        decode=Codec().decode,  # type: ignore
        incrementalencoder=IncrementalEncoder,
        incrementaldecoder=IncrementalDecoder,
        streamwriter=StreamWriter,
        streamreader=StreamReader,
    )
                                                                                                                                                                                                                  e?d??d???dl?d?e?d˃d???dm?d?e?d??d???dn?d?e?d??d???do?dYe?dZ?d???dp?dRe?dS?d???dq?d`e?da?d???i ?dr?dge?dh?d???ds?dne?do?d???dt?due?dv?d???du?d?e?d??d???dv?d?e?d??d???dw?d?e?d˃d???dx?d?e?d˃d???dy?d?e?d΃d???dz?d?e?d׃d???d{?d?e?dڃd???d|?d?e?d݃d???d}?d?e?d??d???d~?d?e?d??d???d?d?e?d˃d???d??d?e?d??d???d??d?e?dŃd???d??d?efrom __future__ import absolute_import, division, unicode_literals

try:
    from collections.abc import Mapping
except ImportError:  # Python 2.7
    from collections import Mapping


class Trie(Mapping):
    """Abstract base class for tries"""

    def keys(self, prefix=None):
        # pylint:disable=arguments-differ
        keys = super(Trie, self).keys()

        if prefix is None:
            return set(keys)

        return {x for x in keys if x.startswith(prefix)}

    def has_keys_with_prefix(self, prefix):
        for key in self.keys():
            if key.startswith(prefix):
                return True

        return False

    def longest_prefix(self, prefix):
        if prefix in self:
            return prefix

        for i in range(1, len(prefix) + 1):
            if prefix[:-i] in self:
                return prefix[:-i]

        raise KeyError(prefix)

    def longest_prefix_item(self, prefix):
        lprefix = self.longest_prefix(prefix)
        return (lprefix, self[lprefix])
           ??d8?de?d?d???d9?dce?dd?d???d:?dfe?dg?d???d;?die?dj?d???d<?die?dj?d???d=?doe?dp?d???d>?d?e?d??d???d??d?e?d??d???i ?d@?d?e?d??d???dA?de?d?d???dBd?ed??d???dCd?ed??d???dDd?ed??d???dEd?ed??d???dF?de?d?d???dG?de?d?d???dHd?ed̃d???dId?ed??d???dJd?ed??d???dKd?ed??d???dLd?ed??d???dMd?ed҃d???dN?de?d?d???dO?de?d?d???dP?de?d?d???i ?dQ?de?d?d???dR?de?d?d???dS?de?d?d???dTd?ed??d???dUd?ed??d???dVd?ed??d???dWd?ed??d???dXd?ed??d???dYd?edՃd???dZd?edՃd???d[d?edՃd???d\?de?d?d???d]?de?d?d???d^?de?d?d???d_?de?d?d???d`d?ed??d???dad?ed??d???i ?dbd?ed??d???dcd?ed??d???ddd?ed??d???ded?ed??d???dfd?ed҃d???dgd?ed҃d???dhd?ed҃d???did?ed҃d???djd?ed҃d???dk?de?d?d???dl?de?d?d???dm?de?d?d???dn?de?d?d???do?de?d?d???dpd?ed??d???dqd?ed??d???drd?ed݃d???i ?dsd?ed݃d???dtd?ed݃d???dud?ed݃d???dvd?ed݃d???dwd?ed??d???dxd?ed??d???dyd?ed??d???dzd?edՃd???d{d?edՃd???d|d?edՃd???d}d?edՃd???d~?de?d?d???d?de?d?d???d??de?d?d???d??de?d?d???d?d?ed??d???d?d?ed??d???i ?d??de?d?d???d??d?e?d??d???d??d?e?d˃d???d??d?e?d˃d???d??d?e?dڃd???d??d?e?d߃d???d??d?e?d??d???d??d?e?d??d???d??d?e?dуd???d??d?e?dуd???d??d?e?dуd???d??d?e?dуd???d??d?e?dуd???d??d?e?d߃d???d??d?e?d߃d???d??d?e?d??d???d??d?e?d??d???i ?d??d?e?d??d???d??d?e?dуd???d??d?e?dȃd???d??d?e?d߃d???d??d?e?d߃d???d??d?e?d߃d???d??d1e?d2?d???d??dAe?dB?d???d??dde?de?d???d??d1e?d2?d???d??d1e?d2?d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???i ?d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d̃d???d??d?e?d??d???d??d?e?d??d???d??d?e?d̃d???d??d?e?d܃d???d??d?e?d߃d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???i ?d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??de?d?d???d??de?d?d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??d?e?d??d???d??dFe?dG?d???ddWe?dX?d???dÐdRe?dS?d???dĐd>e?d??d???dŐdTe?dU?d???dƐd(e?d)?d???dǐd(e?d)?d???i ?dȐd(e?d)?d???dɐd%e?d&?d???from __future__ import absolute_import, division, unicode_literals
from pip._vendor.six import text_type

from bisect import bisect_left

from ._base import Trie as ABCTrie


class Trie(ABCTrie):
    def __init__(self, data):
        if not all(isinstance(x, text_type) for x in data.keys()):
            raise TypeError("All keys must be strings")

        self._data = data
        self._keys = sorted(data.keys())
        self._cachestr = ""
        self._cachepoints = (0, len(data))

    def __contains__(self, key):
        return key in self._data

    def __len__(self):
        return len(self._data)

    def __iter__(self):
        return iter(self._data)

    def __getitem__(self, key):
        return self._data[key]

    def keys(self, prefix=None):
        if prefix is None or prefix == "" or not self._keys:
            return set(self._keys)

        if prefix.startswith(self._cachestr):
            lo, hi = self._cachepoints
            start = i = bisect_left(self._keys, prefix, lo, hi)
        else:
            start = i = bisect_left(self._keys, prefix)

        keys = set()
        if start == len(self._keys):
            return keys

        while self._keys[i].startswith(prefix):
            keys.add(self._keys[i])
            i += 1

        self._cachestr = prefix
        self._cachepoints = (start, i)

        return keys

    def has_keys_with_prefix(self, prefix):
        if prefix in self._data:
            return True

        if prefix.startswith(self._cachestr):
            lo, hi = self._cachepoints
            i = bisect_left(self._keys, prefix, lo, hi)
        else:
            i = bisect_left(self._keys, prefix)

        if i == len(self._keys):
            return False

        return self._keys[i].startswith(prefix)
                                                                                                                                                                                                                                                                                 ?d???i ?d??d?e?dŃd???d??d?e?dŃd???d??d?e?dŃd???d??de?d ?d???d??d$e?d%?d???d??d$e?d%?d???d??d$e?d%?d???d??d$e?d%?d???d??d$e?d%?d???d??d$e?d%?d???d??de?d?d???d??de?d?d???d??de?d?d???d??de?d?d???d??d!e?d"?d???d??d!e?d"?d???d??d?e?d??d???i ?d??d?e?d??d???d?d"ed#?d???d?d"ed#?d???d?d"ed#?d???d?d"ed#?d???d?ded?d???d?ded?d???d?ded?d???d?ded?d???d?d=ed>?d???d?d=ed>?d???d?d=ed>?d???d?d=ed>?d???d?d=ed>?d???d?ded	?d???d?ded	?d???d?ded	?d???i ?d?ded	?d???d?d4ed5?d???d?d4ed5?d???d?d4ed5?d???d͐de?d ?d???dΐd$e?d%?d???dϐd$e?d%?d???dАd$e?d%?d???dѐde?d?d???dҐd$e?d%?d???dӐde?d?d???dԐde?d ?d???dՐde?d ?d???d֐de?d ?d???dאde?d ?d???dؐd$e?d%?d???dِde?d?d???i ?dڐde?d?d???dېde?d?d???dܐde?d?d???dݐd$e?d%?d???dސde?d?d???dߐd!e?d"?d???d??d)e?d*?d???d??d)e?d*?d???d??d*e?d+?d???d??de?d ?d???d??de?d ?d???d??de?d ?d???d??d$e?d%?d???d??d*e?d+?d???d??d.e?d/?d???d??d-e?d.?d???d??d-e?d.?d???i ?d??d-e?d.?d???d??d-e?d.?d???d??dce?dd?d???d??dce?dd?d???d??dce?dd?d???d??dce?dd?d???d??dce?dd?d???d??dce?dd?d???d??dfe?dg?d???d??dfe?dg?d???d??
dEe?
dF?d???d??
dEe?
dF?d???d??
dEe?
dF?d???d??
dEe?
dF?d???d??
dKe?
dL?d???d??
dKe?
dL?d???d??
dKe?
dL?d???i ?d??
dKe?
dL?d???d??
dNe?
dO?d???d??
dNe?
dO?d???d??d?e?d??d???d ?d?e?d??d???d?d?e?d??d???d?d?e?d??d???d?
dNe?
dO?d???d?
dNe?
dO?d???d?
dRe?
dS?d???d?
from __future__ import absolute_import, division, unicode_literals

from genshi.core import QName
from genshi.core import START, END, XML_NAMESPACE, DOCTYPE, TEXT
from genshi.core import START_NS, END_NS, START_CDATA, END_CDATA, PI, COMMENT

from . import base

from ..constants import voidElements, namespaces


class TreeWalker(base.TreeWalker):
    def __iter__(self):
        # Buffer the events so we can pass in the following one
        previous = None
        for event in self.tree:
            if previous is not None:
                for token in self.tokens(previous, event):
                    yield token
            previous = event

        # Don't forget the final event!
        if previous is not None:
            for token in self.tokens(previous, None):
                yield token

    def tokens(self, event, next):
        kind, data, _ = event
        if kind == START:
            tag, attribs = data
            name = tag.localname
            namespace = tag.namespace
            converted_attribs = {}
            for k, v in attribs:
                if isinstance(k, QName):
                    converted_attribs[(k.namespace, k.localname)] = v
                else:
                    converted_attribs[(None, k)] = v

            if namespace == namespaces["html"] and name in voidElements:
                for token in self.emptyTag(namespace, name, converted_attribs,
                                           not next or next[0] != END or
                                           next[1] != tag):
                    yield token
            else:
                yield self.startTag(namespace, name, converted_attribs)

        elif kind == END:
            name = data.localname
            namespace = data.namespace
            if namespace != namespaces["html"] or name not in voidElements:
                yield self.endTag(namespace, name)

        elif kind == COMMENT:
            yield self.comment(data)

        elif kind == TEXT:
            for token in self.text(data):
                yield token

        elif kind == DOCTYPE:
            yield self.doctype(*data)

        elif kind in (XML_NAMESPACE, DOCTYPE, START_NS, END_NS,
                      START_CDATA, END_CDATA, PI):
            pass

        else:
            yield self.unknown(kind)
                                                                                                                                                                                                                                                           ?d?e?dӃd???
dH?d?e?d̃d???
dI?d?e?d??d???
dJ?
dKe?
dL?d???
dM?
dNe?
dO?d???
dP?d?e?d??d???
dQ?
dRe?
dS?d???
dT?d?e?d̃d???
dU?d?e?d̃d???
dV?d?e?d̃d???
dW?
dNe?
dO?d???
dX?d?e?d??d???
dY?
dRe?
dS?d???
dZ?d?e?d??d???
d[?d?e?d??d???
d\?d?e?d??d???
d]?d?e?d??d???i ?
d^ded?d???
d_ded?d???
d`?d?e?d??d???
daded	?d???
dbded	?d???
dcd4ed5?d???
ddd4ed5?d???
ded7ed8?d???
dfd"ed#?d???
dgd=ed>?d???
dhded?d???
dided?d???
djded?d???
dkded?d???
dlded?d???
dmded?d???
dnded?d???i ?
doded?d???
dpded?d???
dqded?d???
dr?d7e?d8?d???
ds?d7e?d8?d???
dt?d7e?d8?d???
du?d7e?d8?d???
dv?d7e?d8?d???
dw?d(e?d)?d???
dx?d(e?d)?d???
dy?d1e?d2?d???
dz?d1e?d2?d???
d{?d1e?d2?d???
d|?d=e?d>?d???
d}?d=e?d>?d???
d~?d@e?dA?d???
d?dCe?dD?d???i ?
d??dCe?dD?d???
d??dCe?dD?d???
d??dFe?dG?d???
d??dFe?dG?d???
d??dFe?dG?d???
d??dFe?dG?d???
d??dIe?dJ?d???
d??dIe?dJ?d???
d??d:e?d;?d???
d??dOe?dP?d???
d??dOe?dP?d???
d??d7e?d8?d???
d??dUe?dV?d???
d??dZe?d[?d???
d??dZe?d[?d???
d??dLe?dM?d???
d??d4e?d5?d???i ?
d??d7e?d8?d???
d??d:e?d;?d???
d??d=e?d>?d???
d??d@e?dA?d???
d??dCe?dD?o
    :?[b+  ?                   @   s?   U d dl Z d dlZd dlZd dlZd dlZd dlZd dlmZ d dlm	Z	 e?
d?Ze?d?Zeje ed< defdd	?Zdefd
d?Zze?? Zeje ed< W n ey]   ejZY nw e jdd?defdd??ZdS )?    N)?appdirs)?running_under_virtualenv?pip?purelib?site_packages?returnc                   C   s   dj tj? S )ze
    Return the major-minor version of the current Python as a string, e.g.
    "3.7" or "3.10".
    z{}.{})?format?sys?version_info? r   r   ?_E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\locations\base.py?get_major_minor_version   s   r   c                  C   sX   t ? rtj?tjd?} nztj?t?? d?} W n ty%   t?d? Y nw tj?	| ?S )N?srcz=The folder you are executing pip from can no longer be found.)
r   ?os?path?joinr	   ?prefix?getcwd?OSError?exit?abspath)Z
src_prefixr   r   r   ?get_src_prefix   s   ?r   ?	user_site)?maxsizec                   C   s   t t?d??S )NZPYTHONFRAMEWORK)?bool?	sysconfig?get_config_varr   r   r   r   ?is_osx_framework2   s   r   )?	functoolsr   ?siter	   r   ?typing?pip._internal.utilsr   ?pip._internal.utils.virtualenvr   ?user_cache_dir?USER_CACHE_DIR?get_pathr   ?Optional?str?__annotations__r   r   ?getusersitepackagesr   ?AttributeError?	USER_SITE?	lru_cacher   r   r   r   r   r   ?<module>   s&   
 

?
   domain)s The e-mail address and/or password you specified are not correct. The e-mail address is not assigned to any user account The following e-mail addresses are associated with your account: The password reset link was invalid, possibly because it has already been used.  Please request a <a href="%(passwd_reset_url)s">new password reset</a>. The password reset token was invalid. The social account has been connected. The social account has been disconnected. The social account is already connected to a different account. The username and/or password you specified are not correct. This account is currently inactive. This account is inactive. This e-mail address is already associated with another account. This e-mail address is already associated with this account. This e-mail confirmation link expired or is invalid. Please <a href="%(email_url)s">issue a new e-mail confirmation request</a>. This part of the site requires us to verify that
you are who you claim to be. For this purpose, we require that you
verify ownership of your e-mail address.  Too many failed login attempts. Try again later. Unverified Username Username can not be used. Please use other username. Username or e-mail Verified Verify Your E-mail Address Warning: We are sorry, but the sign up is currently closed. You are about to use your %(provider_name)s account to login to
%(site_name)s. As a final step, please complete the following form: You can sign in to your account using any of the following third party accounts: You cannot remove your primary e-mail address (%(email)s). You currently do not have any e-mail address set up. You should really add an e-mail address so you can receive notifications, reset your password, etc. You currently have no social network accounts connected to this account. You decided to cancel logging in to our site using one of your existing accounts. If this was a mistake, please proceed to <a href="%(login_url)s">sign in</a>. You have confirmed %(email)s. You have signed out. You must type the same email each time. You must type the same password each time. Your account has no password set up. Your account has no verified e-mail address. Your password is now changed. Your primary e-mail address must be verified. change password client id created date joined e-mail address email address email addresses email confirmation email confirmations expires at extra data field labelLogin key last login name or primary provider secret key sent social account social accounts social application social application token social o
    <?[b?  ?                   @   s?   d dl Z d dlZd dlZd dlZd dlZd dlmZmZ e ?e	?Z
e?d?Zdefdd?Zdefdd?Zdefd	d
?Zdeee  fdd?Zdefdd?Zdefdd?Zdefdd?ZdS )?    N)?List?Optionalz8include-system-site-packages\s*=\s*(?P<value>true|false)?returnc                   C   s   t jtt dt j?kS )znChecks if sys.base_prefix and sys.prefix match.

    This handles PEP 405 compliant virtual environments.
    ?base_prefix)?sys?prefix?getattr? r	   r	   ?aE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\utils\virtualenv.py?_running_under_venv   s   r   c                   C   s
   t td?S )zmChecks if sys.real_prefix is set.

    This handles virtual environments created with pypa's virtualenv.
    Zreal_prefix)?hasattrr   r	   r	   r	   r
   ?!_running_under_regular_virtualenv   s   
r   c                   C   s   t ? pt? S )zBReturn True if we're running inside a virtualenv, False otherwise.)r   r   r	   r	   r	   r
   ?running_under_virtualenv   s   r   c                  C   sf   t j?tjd?} z t| dd??}|?? ?? W  d  ? W S 1 s!w   Y  W dS  ty2   Y dS w )z?Reads {sys.prefix}/pyvenv.cfg and returns its contents as list of lines

    Returns None, if it could not read/access the file.
    z
pyvenv.cfgzutf-8)?encodingN)	?os?path?joinr   r   ?open?read?
splitlines?OSError)Zpyvenv_cfg_file?fr	   r	   r
   ?_get_pyvenv_cfg_lines$   s   
(??r   c                  C   sP   t ? } | du rt?d? dS | D ]}t?|?}|dur%|?d?dkr% dS qdS )aZ  Check `{sys.prefix}/pyvenv.cfg` for system site-packages inclusion

    PEP 405 specifies that when system site-packages are not supposed to be
    visible from a virtual environment, `pyvenv.cfg` must contain the following
    line:

        include-system-site-packages = false

    Additionally, log a warning if accessing the file fails.
    Nz?Could not access 'pyvenv.cfg' despite a virtual environment being active. Assuming global site-packages is not accessible in this environment.T?value?falseF)r   ?logger?warning?#_INCLUDE_SYSTEM_SITE_PACKAGES_REGEX?match?group)Z	cfg_lines?liner   r	   r	   r
   ?_no_global_under_venv3   s   ?
?r!   c                  C   s0   t j?t j?tj??} t j?| d?}t j?|?S )z?Check if "no-global-site-packages.txt" exists beside site.py

    This mirrors logic in pypa/virtualenv for determining whether system
    site-packages are visible in the virtual environment.
    zno-global-site-packages.txt)r   r   ?dirname?abspath?site?__file__r   ?exists)Zsite_mod_dirZno_global_site_packages_filer	   r	   r
   ?#_no_global_under_regular_virtualenvP   s   ?r'   c                   C   s   t ? rt? S t? rt? S dS )zHReturns a boolean, whether running in venv with no system site-packages.F)r   r!   r   r'   r	   r	   r	   r
   ?virtualenv_no_global^   s
   r(   )?loggingr   ?rer$   r   ?typingr   r   ?	getLogger?__name__r   ?compiler   ?boolr   r   r   ?strr   r!   r'   r(   r	   r	   r	   r
   ?<module>   s"    
?	                                                                                                                                                                                                                                                                                                            i de sessió amb xarxa social"

#: templates/socialaccount/authentication_error.html:10
msgid ""
"An error occurred while attempting to login via your social network account."
msgstr ""
"S'ha produït un error intentant iniciar sessió a través del vostre compte de "
"xarxa social."

#: templates/socialaccount/connections.html:5
#: templates/socialaccount/connections.html:8
msgid "Account Connections"
msgstr "Connexions de Compte"

#: templates/socialaccount/connections.html:11
msgid ""
"You can sign in too
    :?[b?  ?                   @   s   d Z g d?ZG dd? d?ZdS )z?
For types associated with installation schemes.

For a general overview of available schemes and their context, see
https://docs.python.org/3/install/index.html#alternate-installation.
??platlib?purelib?headers?scripts?datac                   @   s6   e Zd ZdZeZdedededededdfd	d
?ZdS )?SchemeztA Scheme holds paths which are used as the base directories for
    artifacts associated with a Python package.
    r   r   r   r   r   ?returnNc                 C   s"   || _ || _|| _|| _|| _d S )Nr   )?selfr   r   r   r   r   ? r
   ?^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\models\scheme.py?__init__   s
   
zScheme.__init__)?__name__?
__module__?__qualname__?__doc__?SCHEME_KEYS?	__slots__?strr   r
   r
   r
   r   r      s     ??????r   N)r   r   r   r
   r
   r
   r   ?<module>   s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   e correu electrònic principal ha de ser verificada."

#: templates/account/password_change.html:5
#: templates/account/password_change.html:8
#: templates/account/password_change.html:13
#: templates/account/password_reset_from_key.html:4
#: templates/account/password_reset_from_key.html:7
#: templates/account/password_reset_from_key_done.html:4
#: templates/account/password_reset_from_key_done.html:7
msgid "Change Password"
msgstr "Canviar Contrasenya"

#: templates/account/password_reset.html:6
#: templates/account/password_reset.html:10
#: templates/account/password_reset_done.html:6
#: templates/account/password_reset_done.html:9
msgid "Password Reset"
msgstr "Restablir Contrasenya"

#: templates/account/password_reset.html:15
msgid ""
"Forgotten your password? Enter your e-mail address below, and we'll send you "
"an e-mail allowing you to reset it."
msgstr ""
"Heu oblidat la vostra contrasenya? Introduïu el vostre correu electrònic i "
"us enviarem un correu que us permetrà restablir-la."

#: templates/account/password_reset.html:20
msgid "Reset My Password"
msgstr "Restablir la meva contrasenya"

#: templates/account/password_reset.html:23
msgid "Please contact us if you have any trouble resetting your password."
msgstr ""
"Si us plau contacteu-nis si teniu algun problema per restablir la vostra "
"contrasenya."

#: templates/account/password_reset_done.html:15
msgid ""
"We have sent you an e-mail. If you have not received it please check your "
"spam folder. Otherwise contact us if you do not receive it in a few minutes."
msgstr ""
"Us hem enviat un correu electrònic. Si us plau contacteu-nos si no el rebeu "
"en uns minuts."

#: templates/account/password_reset_from_key.html:7
msgid "Bad Token"
msgstr ""

#: templates/account/password_reset_from_key.html:11
#, python-format
msgid ""
"The password reset link was invalid, possibly because it has already been "
"used.  Please request a <a href=\"%(passwd_reset_url)s\">new password reset</"
"a>."
msgstr ""
"L'enllaç per restablir la contrasenya és invàlid, probablement porquè ja ha "
"estat utilitzat. Si us plau soliciteu <a href=\"%(passwd_reset_url)s"
"\">restablir la contrasenya novament</a>."

#: templates/account/password_reset_from_key.html:16
msgid "change password"
msgstr "canviar la contrasenya"

#: templates/account/password_reset_from_key_done.html:8
msgid "Your password is now changed."
msgstr "La vostra contrasenya ha canviat."

#: templates/account/password_set.html:5 templates/account/password_set.html:8
#: templates/account/password_seo
    @?[b?  ?                   @   s?   d dl Z d dlZd dlZd dlmZ d dlmZ d dlmZ d dlmZ d dlm	Z	 d dlm
Z
 ejdejd	?Ze?d
?ZG dd? de?ZdS )?    N)?sleep)?AttemptManager)?BaseRetrying)?	DoAttempt)?DoSleep)?RetryCallState?	WrappedFn)?bound?_RetValTc                       s?   e Zd Zefdejegejf dejddf? fdd?Z	dejdeje
 f d	ejdejde
fd
d?Zddd?Zdejeejf fdd?Zdedef? fdd?Z?  ZS )?AsyncRetryingr   ?kwargs?returnNc                    s   t ? jdi |?? || _d S )N? )?super?__init__r   )?selfr   r   ??	__class__r   ?`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\_asyncio.pyr   "   s   
zAsyncRetrying.__init__?fn.?argsc                 ?   s?   ?| ? ?  t| |||d?}	 | j|d?}t|t?r<z||i |??I d H }W n ty5   |?t?? ? Y qPw |?	|? nt|t
?rN|??  | ?|?I d H  n|S q)N)?retry_objectr   r   r   T??retry_state)?beginr   ?iter?
isinstancer   ?BaseException?set_exception?sys?exc_info?
set_resultr   ?prepare_for_next_attemptr   )r   r   r   r   r   ?do?resultr   r   r   ?__call__&   s"   ?
?
?zAsyncRetrying.__call__c                 C   s   | ? ?  t| d di d?| _| S )Nr   )r   r   r   )r   r   ?_retry_state)r   r   r   r   ?	__aiter__>   s   zAsyncRetrying.__aiter__c                 ?   s`   ?	 | j | jd?}|d u rt?t|t?rt| jd?S t|t?r-| j??  | ?|?I d H  n|S q)NTr   )	r   r&   ?StopAsyncIterationr   r   r   r   r"   r   )r   r#   r   r   r   ?	__anext__C   s   ?


?zAsyncRetrying.__anext__c                    sJ   t ? ?? ?? t?? ?dtjdtjdtjf? fdd??}? j|_? j|_|S )Nr   r   r   c                  ?   s   ?? | i |??I d H S )Nr   )r   r   ?r   r   r   ?async_wrappedT   s   ?z*AsyncRetrying.wraps.<locals>.async_wrapped)r   ?wraps?	functools?typing?Any?retry?
retry_with)r   r   r+   r   r*   r   r,   P   s   "zAsyncRetrying.wraps)r   r   )?__name__?
__module__?__qualname__r   r.   ?Callable?float?	Awaitabler/   r   r
   r%   r'   ?Unionr   r)   r   r,   ?__classcell__r   r   r   r   r   !   s    .???
?
r   )r-   r   r.   Zasyncior   ?pip._vendor.tenacityr   r   r   r   r   ?TypeVarr5   r   r
   r   r   r   r   r   ?<module>   s   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ;???SݭJ? ?zx[????l????s??????3?@??={T?fi?SJ???u? e????қdw?1?-??L???(????4??/?e?pM!???x'R??^??????(1? ???2?.6????F?*??    	P   ???#?*?  	??^?'Y???G?2H;???'Ӧ??&?????r?kR?  ?????@"?jք?CF^0?I??????nC?(KwD?+?q??,?p?}DB??5A?Z?#16u??mxk$???U?????ajKH??x??@?yI53??:+?/ ???.?1?㼤=???*???p !?????? n0d?  ?y|q?/-?$????????:??>
?????@?h?D??d??Ŭf??????d?l?ܪ??R??????2?????* ?4??_?.????q?S????
}????)#!?M*?xQ???ƈ1?6?w<??(!?Y?ۉ?e?M> [??lQ??m?᷾\?Ի?5l\?;a???r?O?ue?8??`/?EUe3z?SiZ??ȧs޹m^Yv???"3S*?W1V/T??,1,Z?p?c?$?e}??㓑T?$??ص?٪?`~?  ?????^[d                W?w???ZP? ??,_???@  ??s?   	0   ?a??)?????  u.?$$r\??Pm ?,???h???C?;???SݭJ? ?zx[????l????s??????3?@??={T?fi?SJ???u? e????қdw?1?-??L???(????4??/?e?pM!???x'R??^??????(1? ???2?.6????F?*??    	P   ???'?*?  	??^?'Y???G?2H;???'Ӧ??&?????r?kR?  ?????@"?jք?CF^0?I??????nC?(KwD?+?q??,?p?}DB??5A?Z?#16u??mxk$???U?????ajKH??x??@?yI53??:+?/ ???.?1?㼤=???*???p !?????? nYP   o
    @?[bt  ?                   @   sf   d dl Z d dlmZ e jrd dlZd dlmZ ddd?Z		dd
ddedede j	dgdf fdd?Z
dS )?    N)?_utils)?RetryCallState?retry_stater   ?returnc                 C   s   dS )z'Before call strategy that does nothing.N? )r   r   r   ?dE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\before_sleep.py?before_sleep_nothing   s    r   F?loggerzlogging.Logger?	log_level?exc_infoc                    s   d? ??fdd?}|S )z:Before call strategy that logs to some logger the attempt.r   r   r   Nc                    s?   | j jr | j ?? }d|jj? d|? ?}}? r| j ?? }q*d}n
d| j ?? }}d}?j?dt?| j	?? d| j
j? d|? d|? d	?	|d
? d S )NZraisedz: FZreturnedz	Retrying z in z seconds as it ? ?.)r   )?outcome?failed?	exception?	__class__?__name__?result?logr   ?get_callback_name?fn?next_action?sleep)r   ?exZverb?valueZlocal_exc_info?r   r
   r	   r   r   ?log_it&   s&   
???
?z before_sleep_log.<locals>.log_it?r   r   r   Nr   )r	   r
   r   r   r   r   r   ?before_sleep_log   s   r   r   )F)?typing?pip._vendor.tenacityr   ?TYPE_CHECKING?loggingr   r   ?int?bool?Callabler   r   r   r   r   ?<module>   s    
?????                                                                                                                                ame)s. Gràcies per utilitzar %(site_name)s!
%(site_domain)s El correu electrònic i/o la contrasenya que heu especificat no són correctes. El correu electrònic no està assignat a cap compte d'usuari Les següents adreces de correu electrònic estan associades al vostre compte: L'enllaç per restablir la contrasenya és invàlid, probablement porquè ja ha estat utilitzat. Si us plau soliciteu <a href="%(passwd_reset_url)s">restablir la contrasenya novament</a>. El token per reiniciar la contrasenya no és vàlid. El compte de xarxa social ha estat connectat. El compte de xarxa social s'ha desconnectat. El compte de xarxa social ja està connectada a un compte diferent. L'usuari i/o la contrasenya que heu especificat no són correctes. Ara mateix aquest compte està inactiu. Aquest compte està inactiu. Aquest correu electrònic ja està associat amb un altre compte. Aquest correu electrònic ja està associat amb aquest compte. Aquest enllaç de verificació de correu electrònic ha expirat o és invàlid. Si us plau, <a href="%(email_url)s">sol·liciteu una nova verificació per correu electrònic.</a>. Aquesta part del lloc web requereix que verifiquem que sou qui dieu ser. Per això us requerim que verifiqueu la propietat del vostre correu electrònic.  Massa intents fallits. Intenteu-ho de nou més tard. Sense verificar Nom d'usuari Aquest nom d'usuari no pot ser emprat. Si us plau utilitzeu-ne un altre. Nom d'usuari o correu electrònic Verificat Verifiqueu la vostra direcció de correu electrònic Advertència: Ho sentim, en aquest moment el registre está tancat. Us hem enviat un correu electrònic per la vostra
verificació. Si us plau accediu al link dins el correu electrònic. Si no veieu el correu de verificació a la vostra bústia principal, comproveu la carpeta d'spam. D'altra banda
contacteu-nos si no el rebeu en uns minuts. Us hem enviat un correu electrònic per la seva verificació. Seguiu l'enllaç per completar el procés de registre. Si us plau contacteu-nos si no el rebeu en uns minuts. Us hem enviat un correu electrònic. Si us plau contacteu-nos si no el rebeu en uns minuts. Esteu a punt de connectar un nou compte extern des de %(provider)s. Esteu a punt d'iniciar sessió utilitzant un compte extern des de %(provider)s. Esteu a punt d'utilitzar el vostre compte de %(provider_name)s per iniciar sessió a
%(site_name)s. Com a pas final, si us plau completeu el següent formulari: Has rebut aquest correu electrònic perquè vosaltres o algú altre heu sol·licitat una
contrasenya per al voso
    @?[b?  ?                   @   sf   d dl Z d dlmZ e jrd dlZd dlmZ ddd?Z		dd
ddedede j	dgdf fdd?Z
dS )?    N)?_utils)?RetryCallState?retry_stater   ?returnc                 C   s   dS )z&After call strategy that does nothing.N? ?r   r   r   ?]E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\after.py?after_nothing   s    r	   ?%0.3f?loggerzlogging.Logger?	log_level?
sec_formatc                    s   d? ??fdd?}|S )zBAfter call strategy that logs to some logger the finished attempt.r   r   r   Nc                    s:   ?? ? dt?| j?? d?| j ? dt?| j?? d?? d S )NzFinished call to 'z' after z(s), this was the z time calling it.)?logr   ?get_callback_name?fn?seconds_since_start?
to_ordinal?attempt_numberr   ?r   r   r   r   r   ?log_it&   s   ?
??zafter_log.<locals>.log_it?r   r   r   Nr   )r   r   r   r   r   r   r   ?	after_log   s   r   r   )r
   )?typing?pip._vendor.tenacityr   ?TYPE_CHECKING?loggingr   r	   ?int?str?Callabler   r   r   r   r   ?<module>   s    
?????                                                                                                                                                                                                                                                                                                                    mary e-mail address must be verified. change password client id created date joined e-mail address email address email addresses email confirmation email confirmations expires at extra data field labelLogin key last login name or primary provider secret key sent social account social accounts social application social application token social application tokens social applications token secret user verified you are already logged in as %(user_display)s. Project-Id-Version: django-allauth
Report-Msgid-Bugs-To: 
PO-Revision-Date: YEAR-MO-DA HO:MI+ZONE
Last-Translator: Marc Seguí Coll <metarizard@gmail.com>
Language-Team: Català 
Language: ca
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=2; plural=(n != 1);
 "oauth_token" (OAuth1) o token d'accés (OAuth2) "oauth_token_secret" (OAuth1) o token de refrescament (OAuth2) <strong>Nota:</strong> encara podeu <a href="%(email_url)s">canviar la vostra adreça de correu electrònic</a>. Un usuari ja ha estat registrat amb aquesta direcció de correu electrònic. frase secrete de API, frase secreta client o frase secreta de consumidor Connexions de Compte Compte inactiu Comptes Afegir correu electrònic Afegir adreça de correu electrònic Afegir un compte d'una xarxa social externa Ja teniu un compte? Si us plau <a href="%(login_url)s">inicieu sessió</a>. Ja existeix un compte associat a aquesta adreça de correu electrònic. Si us plau, primer identifiqueu-vos utilitzant aquest compte, i després vinculeu el vostre compte %s. S'ha produït un error intentant iniciar sessió a través del vostre compte de xarxa social. Identificador de App o clau de consumidor Esteu segurs de voler tancar sessió? Canviar Contrasenya Confirmar Confirmar adreça de correu electrònic Correu electrònic de confirmació enviat a %(email)s. Connectar %(provider)s Continuar Contrasenya actual Esteu segurs de voler eliminar l'adreça de correu electrònic seleccionada? Correu electrònic Correu electrònic (un altre cop) Correu electrònic (opcional) Adreces de correu electrònic Correu electrònic Confirmació de direcció de correu electrònic Heu oblidat la vostra contrasenya? Heu oblidat la vostra contrasenya? Introduïu el vostre correu electrònic i us enviarem un correu que us permetrà restablir-la. Hola des de %(site_name)s! Si encara no heu creat un compte, llavors si us plau
<a href="%(signup_url)s">registreu-vos</a> primer. En cas d'haver-lo oblidat, el vostre nom d'usuari és %(username)s. Dades de perfil invàlideso
    @?[b`  ?                   @   s^   d dl Z d dlmZ e jrd dlZd dlmZ ddd?Zd	d
dede jdgdf fdd?Z	dS )?    N)?_utils)?RetryCallState?retry_stater   ?returnc                 C   s   dS )z'Before call strategy that does nothing.N? ?r   r   r   ?^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\before.py?before_nothing   s    r	   ?loggerzlogging.Logger?	log_levelc                    s   d? ?fdd?}|S )z:Before call strategy that logs to some logger the attempt.r   r   r   Nc              	      s.   ?? ? dt?| j?? dt?| j?? d?? d S )NzStarting call to 'z', this is the z time calling it.)?logr   ?get_callback_name?fn?
to_ordinal?attempt_numberr   ?r   r
   r   r   ?log_it"   s   
??zbefore_log.<locals>.log_it?r   r   r   Nr   )r
   r   r   r   r   r   ?
before_log   s   r   r   )
?typing?pip._vendor.tenacityr   ?TYPE_CHECKING?loggingr   r	   ?int?Callabler   r   r   r   r   ?<module>   s   
&                                                                                                                                                                                                                                                                                                                                                                                                                                              ication Remember Me Remove Removed e-mail address %(email)s. Reset My Password Set Password Sign In Sign In Via %(provider)s Sign Out Sign Up Sign Up Closed Signup Social Accounts Social Network Login Failure Successfully signed in as %(name)s. Thank you for using %(site_name)s!
%(site_domain)s The e-mail address and/or password you specified are not correct. The e-mail address is not assigned to any user account The following e-mail addresses are associated with your account: The password reset link was invalid, possibly because it has already been used.  Please request a <a href="%(passwd_reset_url)s">new password reset</a>. The password reset token was invalid. The social account has been connected. The social account has been disconnected. The social account is already connected to a different account. The username and/or password you specified are not correct. This account is currently inactive. This account is inactive. This e-mail address is already associated with another account. This e-mail address is already associated with this account. This e-mail confirmation link expired or is invalid. Please <a href="%(email_url)s">issue a new e-mail confirmation request</a>. This part of the site requires us to verify that
you are who you claim to be. For this purpose, we require that you
verify ownership of your e-mail address.  Too many failed login attempts. Try again later. Unverified Username Username can not be used. Please use other username. Username or e-mail Verified Verify Your E-mail Address Warning: We are sorry, but the sign up is currently closed. We have sent an e-mail to you for
verification. Please click on the link inside that e-mail. If you do not see the verification e-mail in your main inbox, check your spam folder. Otherwise
contact us if you do not receive it within a few minutes. We have sent an e-mail to you for verification. Follow the link provided to finalize the signup process. If you do not see the verification e-mail in your main inbox, check your spam folder. Please contact us if you do not receive the verification e-mail within a few minutes. We have sent you an e-mail. If you have not received it please check your spam folder. Otherwise contact us if you do not receive it in a few minutes. You are about to connect a new third party account from %(provider)s. You are about to sign in using a third party account from %(provider)s. You are about to use your %(provider_name)s account to login to
%(site_name)s. As a final step, please complete the following form: You are receiving thiso
    @?[b?  ?                   @   s`   d dl Z d dlZe jd Zdedefdd?Zdedefdd?Zd	ejd
ej	f defdd?Z
dS )?    N?   ?pos_num?returnc                 C   sT   | dkrdS | dkrdS | dkrdS | dkrdS d	|   kr#d
kr$dS  t | d ?S )Nr   ?th?   ?str   ?nd?   ?rd?   ?   ?
   ??find_ordinal?r   ? r   ?^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\_utils.pyr      s   ?r   c                 C   s   | ? t | ?? ?S )Nr   r   r   r   r   ?
to_ordinal*   s   r   ?cb.c                 C   s?   g }z|? | j? W n ty%   z|? | j? W n	 ty"   Y nw Y nw |s,t| ?S z| jr7|?d| j? W n	 tyA   Y nw d?|?S )znGet a callback fully-qualified name.

    If no name can be produced ``repr(cb)`` is called and returned.
    r   ?.)?append?__qualname__?AttributeError?__name__?repr?
__module__?insert?join)r   ?segmentsr   r   r   ?get_callback_name.   s*   ?????
r   )?sys?typing?maxsize?MAX_WAIT?int?strr   r   ?Callable?Anyr   r   r   r   r   ?<module>   s   
"                                                                                                                                                                                                                                                                                                                        ?.     /  g   :/  C   ?/     ?/  =   0  D   ?0     ?0     ?0     ?0     ?0     ?0  &   ?0  )   1  0   :1     k1     p1     ?1     ?1     ?1  ,   ?1  6   ?1     &2  !   F2  =   h2  ?   ?2  U   ,3  ?   ?3  2   44  	   g4  2   q4     ?4     ?4     ?4  &   ?4     ?4     5     )5      95     Z5     i5     v5     ?5     ?5  )   ?5  /   ?5  5   6  O   =6  =   ?6  N   ?6  ?   7  4   ?7  -   8  ,   98  C   f8  B   ?8  '   ?8     9  @   29  >   s9  ?   ?9  ?   f:  4   ;     6;     F;  H   S;  !   ?;  	   ?;  4   ?;     ?;  5   <    A<  ?   T=  [    >  C   \>  O   ?>  ?   ?>  ?  ??  ?   6A  <   vA  E   ?A  ?   ?A  G   ?B  ?   ?B     ?C     ?C  5   ?C  /   D  ?   @D  !  E  1   9F  8   kF  !   ?F  G   ?F     G     %G     :G     @G     UG     hG     {G  "   ?G  #   ?G  	   ?G     ?G     ?G     ?G     H     H     H  	    H  
   *H     5H     BH     IH     `H     zH  "   ?H  #   ?H     ?H     ?H     I  	   I  .   "I     <       o   7              ?      ?   L   K   	   D      J      ?       }   q       0   )   j       1   ?   ?   d   ]       ?      Q   ?   ,   g   %   ?   ?       F   ?   V           (   ?      ?   P   E      ?   ?       I      ?      ?   n               @   ?   "   ?   O   ?   M   8       ?       R       A      Y       ^             m      ?   e       [   G   U   ?       +      S   5   =   X               u       '          l           b      `              Z   t          ~   *       ?   :   C       3   ?   {   6   9   ;   h   ?   \       r   .          T          s              >   x   i   v   f   p   ?   /         y           ?                      !       B   N   w   ?       4       #   
       z                  ?       $   c      a          &   ?   H       -          W   |       _   2      k    "oauth_token" (OAuth1) or access token (OAuth2) "oauth_token_secret" (OAuth1) or refresh token (OAuth2) <strong>Note:</strong> you can still <a href="%(email_url)s">change your e-mail address</a>. A user is already registered with this e-mail address. API secret, client secret, or consumer secret Account Connections Account Inactive Accounts Add E-mail Add E-mail Address Add a 3rd Party Account Already have an account? Then please <a href="%(login_url)s">sign in</a>. An account already exists with this e-mail address. Please sign in to that account first, then connect your %s account. An error occurred while attempting to login via your social network account. App ID, or consumer key Are you sure you want to sign out?INDX( 	 ??`           (   P  ?       ??                  ?D
    ? l     ?D
    ?&?LR??&?LR????LR??&?LR?       ?               a f t e r . c p y t h o n - 3 1 0 . p y c c  ?D
    ? n     ?D
    ?&?LR??&?LR??&?LR??&?LR?       R               b e f o r e . c p y t h o n - 3 1 0 . p y c  ?D
    ? z     ?D
    ???LR????LR????LR????LR?       ?               b e f o r e _ s l e e p . c p y t h o n - 3 1 0 . p y c 
    ?D
    x h     ?D
    !c	?LR?!c	?LR?c??LR !c	?LR?       ?               n a p . c p y t h o n - 3 1 0 . p y c ?D
    ? l     ?D
    !c	?LR?!c	?LR?!c	?LR?!c	?LR? 0      ?                r e t r y . c p y t h o n - 3 1 0 . p y c p y ?D
    ? j     ?D
    c??LR?c??LR?c??LR?c??LR?       ?               s t o p . c p y t h o n - 3 1 0 . p y c . p y ?D
    ? j     ?D
    ?&?LR??&?LR??&?LR??&?LR?                       w a i t . c p y t h o n - 3 1 0 . p y c . p y ?D
    ? r     ?D
    ???LR????LR????LR????LR        3
               _ a s y n c i o . c p y t h o n - 3 1 0 . p y c 
    ?D
    ? n     ?D
    ?&?LR??&?LR??&?LR??&?LR?       ?               _ u t i l s . c p y t h o n - 3 1 0 . p y c y ?D
    ? r     ?D
    ???LR????LR????LR????LR? @      ??               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4               c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         o
    @?[b?
  ?                   @   s?   d dl Z d dlZejrd dlZd dlmZ G dd? de j?ZG dd? de?ZG dd? de?Z	G d	d
? d
e?Z
e
? ZG dd? de?ZG dd? de?ZG dd? de?ZdS )?    N)?RetryCallStatec                   @   s<   e Zd ZdZejdddefdd??Zdd	d
?Zddd?Z	dS )?	stop_basez(Abstract base class for stop strategies.?retry_stater   ?returnc                 C   s   d S ?N? ??selfr   r   r   ?\E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\stop.py?__call__   s   zstop_base.__call__?other?stop_allc                 C   ?
   t | |?S r   )r   ?r	   r   r   r   r
   ?__and__    ?   
zstop_base.__and__?stop_anyc                 C   r   r   )r   r   r   r   r
   ?__or__#   r   zstop_base.__or__N)r   r   r   r   )r   r   r   r   )
?__name__?
__module__?__qualname__?__doc__?abc?abstractmethod?boolr   r   r   r   r   r   r
   r      s    
r   c                   @   ?4   e Zd ZdZdeddfdd?Zdddefd	d
?ZdS )r   z+Stop if any of the stop condition is valid.?stopsr   Nc                 G   ?
   || _ d S r   ?r   ?r	   r   r   r   r
   ?__init__*   r   zstop_any.__init__r   r   c                    ?   t ? fdd?| jD ??S )Nc                 3   ?   ? | ]}|? ?V  qd S r   r   ??.0?x?r   r   r
   ?	<genexpr>.   ?   ? z$stop_any.__call__.<locals>.<genexpr>)?anyr   r   r   r&   r
   r   -   ?   zstop_any.__call__?r   r   r   r   r   r    r   r   r   r   r   r
   r   '   ?    r   c                   @   r   )r   z*Stop if all the stop conditions are valid.r   r   Nc                 G   r   r   r   r   r   r   r
   r    4   r   zstop_all.__init__r   r   c                    r!   )Nc                 3   r"   r   r   r#   r&   r   r
   r'   8   r(   z$stop_all.__call__.<locals>.<genexpr>)?allr   r   r   r&   r
   r   7   r*   zstop_all.__call__r+   r   r   r   r
   r   1   r,   r   c                   @   s"   e Zd ZdZdddefdd?ZdS )?_stop_neverzNever stop.r   r   r   c                 C   s   dS )NFr   r   r   r   r
   r   >   s   z_stop_never.__call__N)r   r   r   r   r   r   r   r   r   r
   r.   ;   s    r.   c                   @   s,   e Zd ZdZddd?Zdd	defd
d?ZdS )?stop_when_event_setz!Stop when the given event is set.?event?threading.Eventr   Nc                 C   r   r   )r0   )r	   r0   r   r   r
   r    H   r   zstop_when_event_set.__init__r   r   c                 C   s
   | j ?? S r   )r0   ?is_setr   r   r   r
   r   K   r   zstop_when_event_set.__call__)r0   r1   r   N)r   r   r   r   r    r   r   r   r   r   r
   r/   E   s    
r/   c                   @   r   )?stop_after_attemptz.Stop when the previous attempt >= max_attempt.?max_attempt_numberr   Nc                 C   r   r   )r4   )r	   r4   r   r   r
   r    R   r   zstop_after_attempt.__init__r   r   c                 C   ?   |j | jkS r   )?attempt_numberr4   r   r   r   r
   r   U   ?   zstop_after_attempt.__call__)r   r   r   r   ?intr    r   r   r   r   r   r
   r3   O   r,   r3   c                   @   r   )?stop_after_delayz3Stop when the time from the first attempt >= limit.?	max_delayr   Nc                 C   r   r   )r:   )r	   r:   r   r   r
   r    \   r   zstop_after_delay.__init__r   r   c                 C   r5   r   )?seconds_since_startr:   r   r   r   r
   r   _   r7   zstop_after_delay.__call__)r   r   r   r   ?floatr    r   r   r   r   r   r
   r9   Y   r,   r9   )r   ?typing?TYPE_CHECKING?	threading?pip._vendor.tenacityr   ?ABCr   r   r   r.   ?
stop_neverr/   r3   r9   r   r   r   r
   ?<module>   s   



                                                                                  o
    @?[bg  ?                   @   sB   d dl Z d dlZejrd dlZdeddfdd?ZG dd? d?ZdS )?    N?seconds?returnc                 C   s   t ?| ? dS )z?
    Sleep strategy that delays execution for a given number of seconds.

    This is the default strategy, and may be mocked out for unit testing.
    N)?time?sleep)r   ? r   ?[E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\nap.pyr      s   r   c                   @   s2   e Zd ZdZddd?Zdeje ddfd	d
?ZdS )?sleep_using_eventz0Sleep strategy that waits on an event to be set.?event?threading.Eventr   Nc                 C   s
   || _ d S )N)r	   )?selfr	   r   r   r   ?__init__%   s   
zsleep_using_event.__init__?timeoutc                 C   s   | j j|d? d S )N)r   )r	   ?wait)r   r   r   r   r   ?__call__(   s   zsleep_using_event.__call__)r	   r
   r   N)	?__name__?
__module__?__qualname__?__doc__r   ?typing?Optional?floatr   r   r   r   r   r   "   s    
r   )r   r   ?TYPE_CHECKING?	threadingr   r   r   r   r   r   r   ?<module>   s   	                                                                                                                                                                                                                                                                                                                                                    ?зстановяване на парола. "
"Кликнете линка по-долу за да възстановите вашата парола."

#: templates/account/email/password_reset_key_message.txt:9
#, python-format
msgid "In case you forgot, your username is %(username)s."
msgstr "В случай, че сте забравили, вашето потребителско име е %(username)s."

#: templates/account/email/password_reset_key_subject.txt:3
#: templates/account/email/unknown_account_subject.txt:3
msgid "Password Reset E-mail"
msgstr "Възстановяване на парола"

#: templates/account/email/unknown_account_message.txt:4
#, python-format
msgid ""
"You are receiving this e-mail because you or someone else has requested a\n"
"password for your user account. However, we do not have any record of a "
"user\n"
"with email %(email)s in our database.\n"
"\n"
"This mail can be safely ignored if you did not request a password reset.\n"
"\n"
"If it was you, you can sign up for an account using the link below."
msgstr ""
"Получавате този e-mail, защото вие или някой друг е поискал парола за вашия "
"потребителски акаунт.\n"
"На сървъра обаче не беше намерен потребител свързван с електронния адрес %(email)s.\n"
"\nМожете да пренебрегнете това писмо, ако не сте поискали възстановяване на парола. "
"Кликнете линка по-долу, за да направите нов акаунт."

#: templates/account/email_confirm.html:6
#: templates/account/email_confirm.html:10
msgid "Confirm E-mail Address"
msgstr "Потвърждение на e-mail адрес"

#: templates/account/email_confirm.html:16
#, python-format
msgid ""
"Please confirm that <a href=\"mailto:%(email)s\">%(email)s</a> is an e-mail "
"address for user %(user_display)s."
msgstr ""
"Моля, потвърдете, че <a href=\"mailto:%(email)s\">%(email)s</a> е e-mail "
"адрес на потребител %(user_display)s."

#: templates/account/email_confirm.html:20
msgid "Confirm"
msgstr "Потвърди"

#: templates/account/email_confirm.html:27
#, python-format
msgid ""
"This e-mail confirmation link expired or is invalid. Please <a href="
"\"%(email_url)s\">issue a new e-mail confirmation request</a>."
msgstr ""
"Този линк за потвърждение на e-mail е изтекъл или ?o
    ;?[b+  ?                   @   s?   U d Z ddlZddlZddlmZmZmZmZmZ ddl	m
Z
 ddlmZ dZG dd? de?Zdaeed	< 		dd
eeef dee dededee dee ddfdd?Zddd?Zddd?dedee dee dee dee ddfdd?ZdS )zN
A module that implements tooling to enable easy warnings about deprecations.
?    N)?Any?Optional?TextIO?Type?Union)?parse)?__version__zDEPRECATION: c                   @   s   e Zd ZdS )?PipDeprecationWarningN)?__name__?
__module__?__qualname__? r   r   ?bE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\utils\deprecation.pyr	      s    r	   ?_original_showwarning?message?category?filename?lineno?file?line?returnc                 C   sb   |d urt d urt | |||||? d S d S t|t?r&t?d?}|?| ? d S t | |||||? d S )Nzpip._internal.deprecations)r   ?
issubclassr	   ?logging?	getLogger?warning)r   r   r   r   r   r   ?loggerr   r   r   ?_showwarning   s   ?

r   c                   C   s,   t jdtdd? td u rt jatt _d S d S )N?defaultT)?append)?warnings?simplefilterr	   r   ?showwarningr   r   r   r   r   ?install_warning_logger,   s
   
?r"   )?feature_flag?issue?reason?replacement?gone_inr#   r$   c                 C   s?   |duot t?t |?k}| t? d?f||sdndf|df||s!dndf|dfg}d?d	d
? |D ??}|r8t|??tj|tdd? dS )a   Helper to deprecate existing functionality.

    reason:
        Textual reason shown to the user about why this functionality has
        been deprecated. Should be a complete sentence.
    replacement:
        Textual suggestion shown to the user about what alternative
        functionality they can use.
    gone_in:
        The version of pip does this functionality should get removed in.
        Raises an error if pip's current version is greater than or equal to
        this.
    feature_flag:
        Command-line flag of the form --use-feature={feature_flag} for testing
        upcoming functionality.
    issue:
        Issue number on the tracker that would serve as a useful place for
        users to find related discussion and provide feedback.
    Nz{}z*pip {} will enforce this behaviour change.z*Since pip {}, this is no longer supported.zA possible replacement is {}.zEYou can use the flag --use-feature={} to test the upcoming behaviour.z@Discussion can be found at https://github.com/pypa/pip/issues/{}? c                 s   s.   ? | ]\}}|d ur|d ur|? |?V  qd S )N)?format)?.0?valueZ
format_strr   r   r   ?	<genexpr>n   s   ? ??
?zdeprecated.<locals>.<genexpr>?   )r   ?
stacklevel)r   ?current_version?DEPRECATION_MSG_PREFIX?joinr	   r   ?warn)r%   r&   r'   r#   r$   Zis_goneZmessage_partsr   r   r   r   ?
deprecated7   s2   ???????
?r3   )NN)r   N)?__doc__r   r   ?typingr   r   r   r   r   Zpip._vendor.packaging.versionr   ?pipr   r/   r0   ?Warningr	   r   ?__annotations__?str?intr   r"   r3   r   r   r   r   ?<module>   sT    	?
??????
?
???????                                                                                                                                                                                                                                                                               لديك حساب؟ من فضلك <a href=\"%(login_url)s\">قم بتسجيل الدخول</a>."

#: templates/account/signup_closed.html:5
#: templates/account/signup_closed.html:8
msgid "Sign Up Closed"
msgstr "الاشتراك مغلق"

#: templates/account/signup_closed.html:10
msgid "We are sorry, but the sign up is currently closed."
msgstr "نحن آسفون‪:‬ الاشتراك مغلق حاليا‪.‬"

#: templates/account/snippets/already_logged_in.html:5
msgid "Note"
msgstr "ملاحظة"
o
    ??[b?  ?                   @   s  d Z ddlmZ ddlmZ i dd?dd?dd	?d
d?dd?dd?dd?dd?dd?dd?dd?dd?dd?dd?d d!?d"d#?d$d%?i d&d'?d(d)?d*d+?d,d-?d.d/?d0d1?d2d3?d4d5?d6d7?d8d9?d:d;?d<d=?d>d??d@dA?dBdC?dDdE?dFdG??dHdHdIdJdKdLdMdNdOdPdQ?
?ZdRdS? ZdTdU? ZdVS )Wz?
    pygments.styles
    ~~~~~~~~~~~~~~~

    Contains built-in styles.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
?    )?find_plugin_styles)?ClassNotFound?defaultzdefault::DefaultStyle?emacszemacs::EmacsStyleZfriendlyzfriendly::FriendlyStyleZfriendly_grayscalez*friendly_grayscale::FriendlyGrayscaleStyleZcolorfulzcolorful::ColorfulStyleZautumnzautumn::AutumnStyleZmurphyzmurphy::MurphyStyleZmannizmanni::ManniStyleZmaterialzmaterial::MaterialStyle?monokaizmonokai::MonokaiStyleZperldoczperldoc::PerldocStyleZpastiezpastie::PastieStyleZborlandzborland::BorlandStyleZtracztrac::TracStyleZnativeznative::NativeStyleZfruityzfruity::FruityStyleZbwzbw::BlackWhiteStyle?vimzvim::VimStyle?vszvs::VisualStudioStyleZtangoztango::TangoStyleZrrtzrrt::RrtStyleZxcodezxcode::XcodeStyle?igorzigor::IgorStylezparaiso-lightz paraiso_light::ParaisoLightStylezparaiso-darkzparaiso_dark::ParaisoDarkStyleZlovelacezlovelace::LovelaceStyleZalgolzalgol::AlgolStyleZalgol_nuzalgol_nu::Algol_NuStyle?arduinozarduino::ArduinoStyleZrainbow_dashzrainbow_dash::RainbowDashStyle?abapzabap::AbapStylezsolarized-darkzsolarized::SolarizedDarkStylezsolarized-lightzsolarized::SolarizedLightStyle?saszsas::SasStylezstata_light::StataLightStylezstata_dark::StataDarkStylezinkpot::InkPotStylezzenburn::ZenburnStylezgruvbox::GruvboxDarkStylezgruvbox::GruvboxLightStylezdracula::DraculaStylezonedark::OneDarkStylezlilypond::LilyPondStyle)
?statazstata-lightz
stata-darkZinkpotZzenburnzgruvbox-darkzgruvbox-lightZdraculazone-dark?lilypondc                 C   s?   | t v rt |  ?d?\}}d}nt? D ]\}}| |kr|  S qd}| }| ?? d }ztd| d d |g?}W n tyI   td| |oDd d ??w zt||?W S  ty]   td	| ??w )
Nz::?yes? ?Stylezpygments.styles.zCould not find style module %rz, though it should be builtin?.z.Could not find style class %r in style module.)	?	STYLE_MAP?splitr   ?title?
__import__?ImportErrorr   ?getattr?AttributeError)?name?mod?cls?builtinZ
found_name?style? r   ?gE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\pygments\styles\__init__.py?get_style_by_name@   s0   ?????r!   c                  c   s&   ? t E dH  t? D ]\} }| V  q	dS )zGReturn a generator for all styles by name,
    both builtin and plugin.N)r   r   )r   ?_r   r   r    ?get_all_stylesX   s
   ?
?r#   N)?__doc__?pip._vendor.pygments.pluginr   ?pip._vendor.pygments.utilr   r   r!   r#   r   r   r   r    ?<module>   s?    
????????	?
?????????????????????? ?!?"?#?0                                                                                                                                                                                                                                                                                                                                                                               اح‪.‬"

#: templates/account/messages/primary_email_set.txt:2
msgid "Primary e-mail address set."
msgstr "تمّ تعيين عنوان البريد الالكتروني الرئيسي‪.‬"

#: templates/account/messages/unverified_primary_email.txt:2
msgid "Your primary e-mail address must be verified."
msgstr "لا بد من التحقق من صحة البريد الإلكتروني‪.‬"

#: templates/account/password_change.html:5
#: templates/account/password_change.html:8
#: templates/accouno
    ??[b   ?                   @   sl   d Z ddlZddlmZ ddlmZ ddlmZ ddlmZ e?	d?Z
ed?Zdd	? Zd
d? Zddd?ZdS )a  
    pygments.regexopt
    ~~~~~~~~~~~~~~~~~

    An algorithm that generates optimized regexes for matching long lists of
    literal strings.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
?    N)?escape)?commonprefix)?groupby)?
itemgetterz[\[\^\\\-\]]c                 C   s   dt ?dd? d?| ?? d S )N?[c                 S   s   d| ? ?  S )N?\)?group)?m? r
   ?`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\pygments\regexopt.py?<lambda>   s    zmake_charset.<locals>.<lambda>? ?])?	CS_ESCAPE?sub?join)Zlettersr
   r
   r   ?make_charset   s   r   c           	   	      s?  |rdpd}| s
dS | d ? t | ?dkr|t? ? | S ? s-|t| dd? d? d | S t ? ?dkrlg }g }| D ]}t |?dkrG|?|? q9|?|? q9t |?dkrl|rd|t|d? d t|? | S |t|? | S t| ?}|r?t |??|t|? t?fd	d
?| D ?d? | S dd
? | D ?}t|?}|r?t |??|tt?fdd?| D ??d? t|ddd? ? | S |d?dd? t| ? fdd??D ?? | S )zEReturn a regex that matches any string in the sorted list of strings.?)r   r   ?   Nz(?:???|c                    s   g | ]}|? d ? ?qS ?Nr
   ??.0?s)?plenr
   r   ?
<listcomp>?   s    z#regex_opt_inner.<locals>.<listcomp>c                 S   s   g | ]	}|d d d? ?qS )N?????r
   r   r
   r
   r   r   B   s    c                 3   s   ? | ]
}|d ?  ? V  qd S r   r
   r   )?slenr
   r   ?	<genexpr>H   s   ? z"regex_opt_inner.<locals>.<genexpr>r   c                 s   s"   ? | ]}t t|d  ?d?V  qdS )r   r   N)?regex_opt_inner?list)r   r   r
   r
   r   r   M   s   ? ?c                    s   | d ? d kS )Nr   r
   )r   )?firstr
   r   r   N   s    z!regex_opt_inner.<locals>.<lambda>)	?lenr   r    ?appendr   r   ?sortedr   r   )	?stringsZ
open_parenZclose_parenZ	oneletter?restr   ?prefixZstrings_rev?suffixr
   )r"   r   r   r   r       sj   ????
?????
???r    r   c                 C   s   t | ?} |t| d? | S )z?Return a compiled regex that matches any string in the given list.

    The strings to match must be literal strings, not regexes.  They will be
    regex-escaped.

    *prefix* and *suffix* are pre- and appended to the final regex.
    ?()r%   r    )r&   r(   r)   r
   r
   r   ?	regex_optR   s   r+   )r   r   )?__doc__?rer   ?os.pathr   ?	itertoolsr   ?operatorr   ?compiler   ZFIRST_ELEMENTr   r    r+   r
   r
   r
   r   ?<module>   s    
8                                                                                                                       provider"
msgstr "مزود"

#: socialaccount/models.py:47
msgid "name"
msgstr "اسم"

#: socialaccount/models.py:49
msgid "client id"
msgstr ""

#: socialaccount/models.py:51
msgid "App ID, or consumer key"
msgstr ""

#: socialaccount/models.py:54
msgid "secret key"
msgstr ""

#: socialaccount/models.py:57
msgid "API secret, client secret, or consumer secret"
msgstr ""

#: socialaccount/models.py:60
msgid "Key"
msgstr ""

#: socialaccount/models.py:77
msgid "social application"
msgstr "تطبيق اجتماعي"

#: socialaccount/models.py:78
msgid "social applications"
msgstr "تطبيقات اجتماعية"

#: socialaccount/models.py:108
msgid "uid"
msgstr ""

#: socialaccount/models.py:110
msgid "last login"
msgstr "أخر دخول"

#: socialaccount/models.py:111
msgid "date joined"
msgstr "تاريخ الانضمام"

#: socialaccount/models.py:112
msgid "extra data"
msgstr "بيانات اضافية"

#: socialaccount/models.py:116
msgid "social account"
msgstr "حساب تواصل اجتماعي"o
    ??[b?  ?                   @   s8   d Z d
dd?Zdd? ZG dd? d?ZG dd	? d	e?ZdS )z?
    pygments.filter
    ~~~~~~~~~~~~~~~

    Module that implements the default filter.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
Nc                    s$   ? fdd?}|D ]}||| ?} q| S )z?
    Use this method to apply an iterable of filters to
    a stream. If lexer is given it's forwarded to the
    filter, otherwise the filter receives `None`.
    c                 3   s   ? | ? ? |?E d H  d S ?N)?filter)?filter_?stream??lexer? ?^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\pygments\filter.py?_apply   s   ?zapply_filters.<locals>._applyr   )r   ?filtersr   r	   r   r   r   r   ?apply_filters   s   r   c                 C   s    t | jtft| d?| j| d??S )z?
    Decorator that converts a function into a filter::

        @simplefilter
        def lowercase(self, lexer, stream, options):
            for ttype, value in stream:
                yield ttype, value.lower()
    ?
__module__)r   ?__doc__?function)?type?__name__?FunctionFilter?getattrr   )?fr   r   r   ?simplefilter   s
   
	?r   c                   @   s    e Zd ZdZdd? Zdd? ZdS )?Filterzl
    Default filter. Subclass this class or use the `simplefilter`
    decorator to create own filters.
    c                 K   s
   || _ d S r   )?options??selfr   r   r   r   ?__init__/   s   
zFilter.__init__c                 C   s   t ? ?r   )?NotImplementedError?r   r   r   r   r   r   r   2   s   zFilter.filterN)r   r   ?__qualname__r   r   r   r   r   r   r   r   )   s    r   c                   @   s$   e Zd ZdZdZdd? Zdd? ZdS )r   z?
    Abstract class used by `simplefilter` to create simple
    function filters on the fly. The `simplefilter` decorator
    automatically creates subclasses of this class for
    functions passed to it.
    Nc                 K   s0   t | d?std| jj ??tj| fi |?? d S )Nr   z%r used without bound function)?hasattr?	TypeError?	__class__r   r   r   r   r   r   r   r   ?   s
   
?zFunctionFilter.__init__c                 c   s   ? | ? ||| j?E d H  d S r   )r   r   r   r   r   r   r   E   s   ?zFunctionFilter.filter)r   r   r   r   r   r   r   r   r   r   r   r   6   s
    r   r   )r   r   r   r   r   r   r   r   r   ?<module>   s
    
                                                                                                                                                                                                                                                                                                                                                                                                                                     ccount_inactive." + app_settings.TEMPLATE_EXTENSION


account_inactive = AccountInactiveView.as_view()


class EmailVerificationSentView(TemplateView):
    template_name = "account/verification_sent." + app_settings.TEMPLATE_EXTENSION


email_verification_sent = EmailVerificationSentView.as_view()
                                                                                                                                                                                                                     ???SݭJ? ?zxd"	_+?#Q??????0?)??~?/??n}??dS??B%7\Q?foh\?ם?'?H??%Zsb?|??
8???T?C??Lm??_A?1W&?  ?   	P   ??r??*?  	??^?'Y???G?2H;???'Ӧ??&?????r?kR?  ????c??蓋Կ?L淝?g?"w?`?_)S?k^r?]y???\@????1?R^w?\?9s??Eo$?	?ƪK^%???Y???L??t? H??  p!=?a?XH:
R????}??????|^??w??皮???m6???~?H???oHLh-??Bk>t????z_???^????"?SUڬ???@t?S?-#6r??}?xER?N?	????|???qń??㱬????DÓ?????
\?/?='??P?('+{~?>?=F?? v??M=??5??dC???
;??_??i??}e?z?g??&??R;?!?
??b?L[e\?c?????O?k<v?k?}'6ͷ?jzRCINDX( 	 ?}`           (   ?  ?       ??                  ?D
    ? n     ?D
    i???LR?i???LR?i???LR?i???LR?       [
               f i l t e r . c p y t h o n - 3 1 0 . p y c y ?D
    ? l     ?D
    i???LR?i???LR?i???LR?i???LR? `      -_               l e x e r . c p y t h o n - 3 1 0 . p y c p y ?D
    ? r     ?D
    X)??LR?X)??LR?X)??LR?X)??LR?       ?               m o d e l i n e . c p y t h o n - 3 1 0 . p y c . 1 4 ?D
    ? n     ?D
    X)??LR?X)??LR?X)??LR?X)??LR        ?               p l u g i n . c p y t h o n - 3 1 0 . p y c y ?D
    ? r     ?D
    iw??LR?iw??LR?iw??LR?iw??LR?       ?               r e g e x o p t . c p y t h o n - 3 1 0 . p y c 
    ?D
    ? l     ?D
    iw??LR?iw??LR?iw??LR?iw??LR?        ?               s t y l e . c p y t h o n - 3 1 0 . p y c p y ?D
    ? l     ?D
    ????LR?????LR?????LR?????LR?        (               t o k e n . c p y t h o n - 3 1 0 . p y c p y ?D
    ? j     ?D
    ????LR?????LR?????LR ????LR? 0      ?#               u t i l . c p y t h o n - 3 1 0 . p y c . p y ?D
    ? r     ?D
    ????LR?????LR?????LR?????LR?       ?               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4               c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         o
    ??[b?  ?                   @   s@   d Z dZdZdZdZdd? Zdd? Zd	d
? Zdd? Zdd? Z	dS )a0  
    pygments.plugin
    ~~~~~~~~~~~~~~~

    Pygments setuptools plugin interface. The methods defined
    here also work if setuptools isn't installed but they just
    return nothing.

    lexer plugins::

        [pygments.lexers]
        yourlexer = yourmodule:YourLexer

    formatter plugins::

        [pygments.formatters]
        yourformatter = yourformatter:YourFormatter
        /.ext = yourformatter:YourFormatter

    As you can see, you can define extensions for the formatter
    with a leading slash.

    syntax plugins::

        [pygments.styles]
        yourstyle = yourstyle:YourStyle

    filter plugin::

        [pygments.filter]
        yourfilter = yourfilter:YourFilter


    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
zpygments.lexerszpygments.formatterszpygments.styleszpygments.filtersc              	   C   s6   zddl m} W n ttfy   g  Y S w |?| ?S )N?    )?pkg_resources)?pip._vendorr   ?ImportError?OSError?iter_entry_points)Z
group_namer   ? r   ?^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\pygments\plugin.pyr   +   s   ?
r   c                  c   s   ? t t?D ]} | ?? V  qd S ?N)r   ?LEXER_ENTRY_POINT?load?Z
entrypointr   r   r   ?find_plugin_lexers4   s   ??r   c                  c   ?$   ? t t?D ]
} | j| ?? fV  qd S r	   )r   ?FORMATTER_ENTRY_POINT?namer   r   r   r   r   ?find_plugin_formatters9   ?   ??r   c                  c   r   r	   )r   ?STYLE_ENTRY_POINTr   r   r   r   r   r   ?find_plugin_styles>   r   r   c                  c   r   r	   )r   ?FILTER_ENTRY_POINTr   r   r   r   r   r   ?find_plugin_filtersC   r   r   N)
?__doc__r
   r   r   r   r   r   r   r   r   r   r   r   r   ?<module>   s    $	       st_logout_view_on_post(self):
        c, resp = self._logout_view("get")
        self.assertTemplateUsed(
            resp, "account/logout.%s" % app_settings.TEMPLATE_EXTENSION
        )

        receiver_mock = Mock()
        user_logged_out.connect(receiver_mock)

        resp = c.post(reverse("account_logout"))

        self.assertTemplateUsed(resp, "account/messages/logged_out.txt")
        receiver_mock.assert_called_once_with(
            sender=get_user_model(),
            request=resp.wsgi_request,
            user=get_user_model().objects.get(username="john"),
            signal=user_logged_out,
        )

        user_logged_out.disconnect(receiver_mock)

    def _logout_view(self, method):
        c = Client()
        user = get_user_model().objects.create(username="john", is_active=True)
        user.set_password("doe")
        user.save()
        c = Client()
        c.login(username="john", password="doe")
        return c, getattr(c, method)(reverse("account_logout"))

    @override_settings(
        ACCOUNT_EMAIL_VERIFICATION=app_settings.EmailVerificationMethod.OPTIONAL,
        ACCOUNT_SIGNUP_PASSWORD_ENTER_TWICE=False,
    )
    def test_optional_email_verification(self):
        c = Client()
        # Signup
        c.get(reverse("account_signup"))
        resp = c.post(
            reverse("account_signup"),
            {
                "username": "johndoe",
                "email": "john@example.com",
                "password1": "johndoe",
            },
        )
        # Logged in
        self.assertRedirects(
            resp, settings.ACCOUNT_SIGNUP_REDIRECT_URL, fetch_redirect_response=False
        )
        self.assertEqual(mail.outbox[0].to, ["john@example.com"])
        self.assertEqual(len(mail.outbox), 1)
        # Logout & login again
        c.logout()
        # Wait for cooldown
        EmailConfirmation.objects.update(sent=now() - timedelta(days=1))
        # Signup
        resp = c.post(
            reverse("account_login"),
            {"login": "johndoe", "password": o
    ??[b?  ?                   @   s6   d Z ddlZdgZe?dej?Zdd? Zd	dd?ZdS )
z?
    pygments.modeline
    ~~~~~~~~~~~~~~~~~

    A simple modeline parser (based on pymodeline).

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
?    N?get_filetype_from_bufferze
    (?: vi | vim | ex ) (?: [<=>]? \d* )? :
    .* (?: ft | filetype | syn | syntax ) = ( [^:\s]+ )
c                 C   s   t ?| ?}|r|?d?S d S )N?   )?modeline_re?search?group)?l?m? r	   ?`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\pygments\modeline.py?get_filetype_from_line   s   

?r   ?   c                 C   sp   | ? ? }|d| d d? D ]}t|?}|r|  S qt|dd?D ]}|t|?k r5t|| ?}|r5|  S q!dS )zL
    Scan the buffer for modelines and return filetype if one is found.
    ?????r   N)?
splitlinesr   ?range?len)?buf?	max_lines?linesr   ?ret?ir	   r	   r
   r      s   ??)r   )?__doc__?re?__all__?compile?VERBOSEr   r   r   r	   r	   r	   r
   ?<module>   s    
?                                                                                                                                                                                                                                                                                                                                                           1,
    )
    def test_login_using_unverified_email_address_is_prohibited(self):
        user = get_user_model().objects.create(
            username="john", email="john@example.org", is_active=True
        )
        user.set_password("doe")
        user.save()

        EmailAddress.objects.create(
            user=user, email="john@example.org", primary=True, verified=True
        )
        EmailAddress.objects.create(
            user=user, email="john@example.com", primary=True, verified=False
        )

        resp = self.client.post(
            reverse("account_login"), {"login": "john@example.com", "password": "doe"}
        )
        self.assertRedirects(
            resp,
            reverse("account_email_verification_sent"),
            fetch_redirect_response=False,
        )
        self.assertEqual(len(mail.outbox), 1)
        assert mail.outbox[0].to == ["john@example.com"]

    def test_login_unverified_account_mandatory(self):
        """Tests login behavior when email verification is mandatory."""
        user = get_user_model().objects.create(username="john")
        user.set_password("doe")
        user.save()
        EmailAddress.objects.create(
            user=user, email="user@example.com", primary=True, verified=False
        )
        resp = self.client.post(
            reverse("account_login"), {"login": "john", "password": "doe"}
        )
        self.assertRedirects(resp, reverse("account_email_verification_sent"))

    def test_login_inactive_account(self):
        """
        Tests login behavior with inactive accounts.

        Inactive user accounts should be prevented from performing any actions,
        regardless of their verified state.
        """
        # Inactive and verified user account
        user = get_user_model().objects.create(username="john", is_active=False)
        user.set_password("doe")
        user.save()
        EmailAddress.objects.create(
            user=user, email="john@example.com", primary=True, verified=True
        )
        resp = self.client.post(
            reverse("account_login"), {"login": "john", "password": "doe"}
        )
        self.assertRedirects(resp, reverse("account_inactive"))

        # Inactive and unverified user account
        user = get_user_model().objects.create(username="doe", is_active=False)
        user.set_password("john")
        user.save()
        EmailAddress.objects.create(
            user=user, email="user@example.com", primary=True, verified=False
        )
        resp = self.client.post(
            reverseo
    ??[b?  ?                   @   sD   d Z ddlmZmZ dZdZg d?Zdd? Zdd	d
?Zddd?Z	dS )a  
    Pygments
    ~~~~~~~~

    Pygments is a syntax highlighting package written in Python.

    It is a generic syntax highlighter for general use in all kinds of software
    such as forum systems, wikis or other applications that need to prettify
    source code. Highlights are:

    * a wide range of common languages and markup formats is supported
    * special attention is paid to details, increasing quality by a fair amount
    * support for new languages and formats are added easily
    * a number of output formats, presently HTML, LaTeX, RTF, SVG, all image
      formats that PIL supports, and ANSI sequences
    * it is usable as a command-line tool and as a library
    * ... and it highlights even Brainfuck!

    The `Pygments master branch`_ is installable with ``easy_install Pygments==dev``.

    .. _Pygments master branch:
       https://github.com/pygments/pygments/archive/master.zip#egg=Pygments-dev

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
?    )?StringIO?BytesIOz2.11.2Zrestructuredtext)?lex?format?	highlightc              
   C   s\   z|? | ?W S  ty- } zt|jd t?r(d|jd v s$d|jd v r(td??? d}~ww )zG
    Lex ``code`` with ``lexer`` and return an iterable of tokens.
    r   zunbound method get_tokens?&missing 1 required positional argumentz4lex() argument must be a lexer instance, not a classN)Z
get_tokens?	TypeError?
isinstance?args?str)?code?lexer?err? r   ?`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\pygments\__init__.pyr   #   s   ????r   Nc              
   C   s?   z"|st |dd?rt? pt? }|?| |? |?? W S |?| |? W dS  tyI } zt|jd t?rDd|jd v s@d|jd v rDtd??? d}~ww )z?
    Format a tokenlist ``tokens`` with the formatter ``formatter``.

    If ``outfile`` is given and a valid file object (an object
    with a ``write`` method), the result will be written to it, otherwise
    it is returned as a string.
    ?encodingNr   zunbound method formatr   z;format() argument must be a formatter instance, not a class)	?getattrr   r   r   ?getvaluer   r	   r
   r   )?tokens?	formatter?outfileZrealoutfiler   r   r   r   r   2   s    
????r   c                 C   s   t t| |?||?S )z?
    Lex ``code`` with ``lexer`` and format it with the formatter ``formatter``.

    If ``outfile`` is given and a valid file object (an object
    with a ``write`` method), the result will be written to it, otherwise
    it is returned as a string.
    )r   r   )r   r   r   r   r   r   r   r   J   s   r   )N)
?__doc__?ior   r   ?__version__Z__docformat__?__all__r   r   r   r   r   r   r   ?<module>   s    
                                                                                  by not checking on `user_can_authenticate()` users will allow to become
        authenticated whereas according to Django logic this should not be
        allowed.

        In order to preserve the allauth behavior while respecting Django's
        logic, we stash a user for which the password check succeeded but
        `user_can_authenticate()` failed. In the allauth authentication logic,
        we can then unstash this user and proceed pointing the user to the
        account inactive page.
        """
        global _stash
        ret = getattr(_stash, "user", None)
        _stash.user = user
        return ret

    @classmethod
    def unstash_authenticated_user(cls):
        return cls._stash_user(None)
                                                                                                                                                                                                                                                                                                         o
    ;?[b?  ?                   @   s?   d Z ddlZddlZddlmZ ddlmZ dedefdd?Z	dded
e
defdd?Zdded
e
defdd?Zdedee fdd?ZdS )z?
This code wraps the vendored appdirs module to so the return values are
compatible for the current pip code base.

The intention is to rewrite current usages gradually, keeping the tests pass,
and eventually drop this after all usages are changed.
?    N)?List)?platformdirs?appname?returnc                 C   s   t j| dd?S )NF)?	appauthor)?_appdirs?user_cache_dir)r   ? r	   ?^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\utils\appdirs.pyr      s   r   T?roamingc                 C   sB   t j| d|d?}tj?|?r|S d}| rtj?|| ?}tj?|?S )NF?r   r   z
~/.config/)r   Zuser_data_dir?os?path?isdir?join?
expanduser)r   r   r   Zlinux_like_pathr	   r	   r
   ?_macos_user_config_dir   s   r   c                 C   s$   t jdkr
t| |?S tj| d|d?S )N?darwinFr   )?sys?platformr   r   ?user_config_dir)r   r   r	   r	   r
   r   "   s   

r   c                 C   sN   t jdkrtj| ddd?gS tj| ddd?}t jdkr|gS |?tj?dg S )Nr   FT)r   Z	multipath?win32z/etc)r   r   r   Zsite_data_dirZsite_config_dir?splitr   ?pathsep)r   Zdirvalr	   r	   r
   ?site_config_dirs+   s   

r   )T)?__doc__r   r   ?typingr   ?pip._vendorr   r   ?strr   ?boolr   r   r   r	   r	   r	   r
   ?<module>   s    	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  INDX( 	 Nc           (     ?       ?1 i ? . 1         ?D
    ? p     ?C
    R??LR?R??LR?R??LR?R??LR?       N               a p p d i r s . c p y t h o n - 3 1 0 . p y c XD
    ? n     ?C
    ?#R?LR??#R?LR??#R?LR??#R?LR?       ?               c o m p a t . c p y t h o n - 3 1 0 . p y c . ?D
    ? ?     ?C
    }_G?LR?}_G?LR?}_G?LR?}_G?LR?       ?              " c o m p a t i b i l i t y _ t a g s . c p y t h o n - 3 1 0 . p y c   ?D
    ? x     ?C
    Z<?LR?Z<?LR Z<?LR?Z<?LR?       ?               d e p r e c a t i o n . c p y t h o n - 3 1 0 . p y c xE
    ? ?     ?C
    "r?LR?"r?LR?"r?LR?"r?LR?                     " d i r e c t _ u r l _ h e l p e r s . c p y t h o n - 3 1 0 . p y c   ?E
    ? ~     ?C
    ~???LR?~???LR?~???LR?~???LR?       G               d i s t u t i l s _ a r g s . c p y t h o n - 3 1 0 . p y c  E
    ? r     ?C
    g??LR?g??LR??y??LR?g??LR?       `               e g g _ l i n k . c p y t h o n - 3  0 . p y c y c  TE
    ? r     ?C
    ??%?LR???%?LR???%?LR???%?LR?                      e n c o d i n g . c p y t h o n - 3 1 0 . p y c y c  ?D
    ? v     ?C
    ?N?LR??N?LR??N?LR??N?LR?        $               f i l e s y s t e m . c p y t h o n - 3 1 0 . p y c  E
    ? t     ?C
    0??LR?0??LR?0??LR?0??LR?       ?               f i l e t y p e s . c p y t h o n - 3 1 0 . p y c    KE
    ? l     ?C
    M?LR?M?LR?M?LR?M?LR?       ?               g l  b c . c p y t h o n - 3 1 0 . p y c c . ?D
    ? n     ?C
    ??I?LR???I?LR???I?LR???I?LR?        F               h a s h e s . c p y t h o n - 3 1 0 . p y c . ?C
    ? ?     ?C
    6?z?LR?6?z?LR?6?z?LR?6?z?LR?       ?              & i n j e c t _ s e c u r e t r a n s p o r t . c p y t h o n - 3 1 0 . p y c G?D
    ? p     ?C
    e??LR??w??LR??w??LR??w??LR? 0      ?%               l o g g i n g . c p y t h o n - 3 1 0 . p y c ?D
    ? j     ?C
    ???LR????LR????LR????LR  P      I               m i s c . c p y t h o n - 3 1 0 . p y c . p y E
    ? n     ?C
    0??LR?0??LR?0??LR?0??LR?       ?               m o d e l s . c p y t h o n - 3 1 0 . p y c y yE
    ? t     ?C
    "r?LR?"r?LR?"r?LR?"r?LR?                      p a c k a g i n g . c p y t h o n - 3 1 0 . p y c 3 1 hE
    ? ?     ?C
    ;_N?LR?;_N?LR?;_N?LR?;_N?LR?        ?                s e t u p t o o l s _ b u i l d . c p y t h o n - 3 1 0 . p y c r     @E
    ? v     ?C
    ? ?LR?? ?LR?? ?LR?? ?LR?        ?               s u b p r o c e s s . c p y t h o n - 3 1 0 . p y c  ?D
    ? r     ?C
     ?P?LR? ?P?LR? ?P?LR? ?P?LR?        }               t e m p _ d i r . c p y t h o n - 3 1 0 . p y c y c  tE
    ? t     ?C
    "?j?LR?"?j?LR?"?j?LR?"?j?LR?                       u n p a c k i n g . c p y t h o n - 3 1 0 . p y c    E
    ? j     ?C
    ?y??LR??y??LR??y??LR??y??LR?       5               u r l s . c p y t h o n - 3 1 0 . p y c 1 0  ?D
    ? v     ?C
    ?%?LR??%?LR??%?LR??%?LR?       ?               v i r t u a l e n v . c p y t h o n - 3 1 0 . p y c  uE
    ? l     ?C
    "?j?LR?"?j?LR?"?j?LR?"?j?LR?        9               w h e e l . c p y t h o n - 3 1 0 . p y c p y ?C
    ? j     ?C
    ??|?LR???|?LR???|?LR???|?LR?       ?               _ l o g . c p y t h o n - 3 1 0 . p y c . p y ?C
    ? r     ?C
    =,x?LR?=,x?LR?=,x?LR?=,x?LR??       ?                _ _ i n i t _ _ . c p y t h o n - 3  0 . p y c . 1 4               0 . p y c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                              o
    =?[b  ?                	   @   s?  d Z dZzddlZddlmZ eej?ZddlmZ W n eefy1   dZdd? Z	dd? Z
Y dS w dd	lmZmZmZmZ ejZG d
d? de?ZejjZejge_eje_ejjZejee?ge_eje_ejj	Zejejge_eje_ejjZejege_eje_ejj Z!ejeejeeej?ge!_eje!_ejj"Z#ejejejeeej?ge#_eje#_ejj$Z%ej&ge%_eje%_dd? Z'dd? Z
e fdd?Zdd? Z	ddd?Zdd? Z(dd? Z"dd? Z)dS )i????i?????    N)?LibraryLoader)?wintypesc                  G   ?   d S ?N? ??_r   r   ?]E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\colorama\win32.py?<lambda>   ?    r
   c                  G   r   r   r   r   r   r   r	   r
      r   )?byref?	Structure?c_char?POINTERc                   @   s>   e Zd ZdZdefdefdejfdejfdefgZdd? Z	d	S )
?CONSOLE_SCREEN_BUFFER_INFOzstruct in wincon.h.?dwSize?dwCursorPosition?wAttributes?srWindow?dwMaximumWindowSizec                 C   sH   d| j j| j j| jj| jj| j| jj| jj| jj| jj	| j
j| j
jf S )Nz"(%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d))r   ?Y?Xr   r   r   ?Top?Left?Bottom?Rightr   )?selfr   r   r	   ?__str__   s   ?z"CONSOLE_SCREEN_BUFFER_INFO.__str__N)
?__name__?
__module__?__qualname__?__doc__?COORDr   ?WORD?
SMALL_RECT?_fields_r   r   r   r   r	   r      s    ?r   c                 C   s   t ? }t| t|??}t|?S r   )r   ?_GetConsoleScreenBufferInfor   ?bool)?handle?csbi?successr   r   r	   ?_winapi_test\   s
   ?r+   c                   C   s   t dd? tt?tt?fD ??S )Nc                 s   s   ? | ]}t |?V  qd S r   )r+   )?.0?hr   r   r	   ?	<genexpr>c   s   ? zwinapi_test.<locals>.<genexpr>)?any?_GetStdHandle?STDOUT?STDERRr   r   r   r	   ?winapi_testb   s   ?r3   c                 C   s    t | ?}t? }t|t|??}|S r   )r0   r   r&   r   )?	stream_idr(   r)   r*   r   r   r	   ?GetConsoleScreenBufferInfof   s   ?r5   c                 C   s   t | ?}t||?S r   )r0   ?_SetConsoleTextAttribute)r4   ?attrsr(   r   r   r	   ?SetConsoleTextAttributem   s   
r8   Tc                 C   sv   t |? }|jdks|jdkrd S t |jd |jd ?}|r2tt?j}| j|j7  _| j|j7  _t| ?}t	||?S )Nr   ?   )
r"   r   r   r5   r1   r   r   r   r0   ?_SetConsoleCursorPosition)r4   ?position?adjust?adjusted_position?srr(   r   r   r	   ?SetConsoleCursorPositionq   s   

r?   c                 C   sB   t | ?}t|?? ?}t?|?}t?d?}t||||t|??}|jS )Nr   )r0   r   ?encoder   ?DWORD?_FillConsoleOutputCharacterAr   ?value)r4   ?char?length?startr(   ?num_writtenr*   r   r   r	   ?FillConsoleOutputCharacter?   s   

?rH   c                 C   s:   t | ?}t?|?}t?|?}t?d?}t||||t|??S )za FillConsoleOutputAttribute( hConsole, csbi.wAttributes, dwConSize, coordScreen, &cCharsWritten )r   )r0   r   r#   rA   ?_FillConsoleOutputAttributer   )r4   ?attrrE   rF   r(   ?	attributerG   r   r   r	   ?FillConsoleOutputAttribute?   s   


?rL   c                 C   s   t | ?S r   )?_SetConsoleTitleW)?titler   r   r	   ?SetConsoleTitle?   s   rO   )T)*r1   r2   ?ctypesr   ?WinDLL?windllr   ?AttributeError?ImportErrorr8   r3   r   r   r   r   ?_COORDr"   r   ?kernel32?GetStdHandler0   rA   ?argtypes?HANDLE?restyper5   r&   ?BOOLr6   r#   r?   r:   ZFillConsoleOutputCharacterArB   rL   rI   ZSetConsoleTitleWrM   ?LPCWSTRr+   rH   rO   r   r   r   r	   ?<module>   s|   
????????


                                                                                                                                                     INDX( 	 ?!`           (   P  ?       ?                    ?D
    ? j     ?D
    ???LR????LR????LR????LR?       ?               a n s i . c p y t h o n - 3 1 0 . p y c 3 1 0 ?D
    ? x     ?D
    ???LR????LR????LR????LR?        ?               a n s i t o w i n 3 2 . c p y t h o n - 3 1 0 . p y c ?D
    ? v     ?D
    y)??LR?y)??LR?y)??LR?y)??LR?       ?               i n i t i a l i s e . c p y t h o n - 3 1 0 . p y c 4 ?D
    ? l     ?D
    ????LR?????LR?????LR ????LR?       k               w i n 3 2 . c p y t h o n - 3 1 0 . p y c y c ?D
    ? p     ?D
    ????LR?????LR?????LR?????LR?        ?               w i n t e r m . c p y t h o n - 3 1 0 . p y c ?D
    ? r     ?D
    y)??LR?y)??LR?y)??LR?y)??LR??      ?               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4               c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        o
    =?[b?	  ?                   @   s?   d Z dZdZdZdd? Zdd? Zdd	d
?Zddd?ZG dd? de?Z	G dd? de?Z
G dd? de	?ZG dd? de	?ZG dd? de	?Ze? Ze? Ze? Ze
? ZdS )z?
This module generates ANSI character codes to printing colors to terminals.
See: http://en.wikipedia.org/wiki/ANSI_escape_code
z[z]?c                 C   ?   t t| ? d S )N?m??CSI?str)?code? r   ?\E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\colorama\ansi.py?code_to_chars   ?   r
   c                 C   s   t d |  t S )Nz2;)?OSC?BEL)?titler   r   r	   ?	set_title   r   r   ?   c                 C   r   )N?Jr   ??moder   r   r	   ?clear_screen   r   r   c                 C   r   )N?Kr   r   r   r   r	   ?
clear_line   r   r   c                   @   s   e Zd Zdd? ZdS )?	AnsiCodesc                 C   s6   t | ?D ]}|?d?st| |?}t| |t|?? qd S )N?_)?dir?
startswith?getattr?setattrr
   )?self?name?valuer   r   r	   ?__init__   s   

??zAnsiCodes.__init__N)?__name__?
__module__?__qualname__r    r   r   r   r	   r      s    r   c                   @   s>   e Zd Zddd?Zddd?Zddd?Zddd	?Zdd
d?ZdS )?
AnsiCursor?   c                 C   ?   t t|? d S )N?Ar   ?r   ?nr   r   r	   ?UP%   r   zAnsiCursor.UPc                 C   r&   )N?Br   r(   r   r   r	   ?DOWN'   r   zAnsiCursor.DOWNc                 C   r&   )N?Cr   r(   r   r   r	   ?FORWARD)   r   zAnsiCursor.FORWARDc                 C   r&   )N?Dr   r(   r   r   r	   ?BACK+   r   zAnsiCursor.BACKc                 C   s   t t|? d t|? d S )N?;?Hr   )r   ?x?yr   r   r	   ?POS-   s   zAnsiCursor.POSN)r%   )r%   r%   )r!   r"   r#   r*   r,   r.   r0   r5   r   r   r   r	   r$   $   s    



r$   c                   @   ?P   e Zd ZdZdZdZdZdZdZdZ	dZ
d	Zd
ZdZdZdZdZdZdZdZdS )?AnsiFore?   ?   ?    ?!   ?"   ?#   ?$   ?%   ?'   ?Z   ?[   ?\   ?]   ?^   ?_   ?`   ?a   N?r!   r"   r#   ?BLACK?RED?GREEN?YELLOW?BLUE?MAGENTA?CYAN?WHITE?RESET?LIGHTBLACK_EX?LIGHTRED_EX?LIGHTGREEN_EX?LIGHTYELLOW_EX?LIGHTBLUE_EX?LIGHTMAGENTA_EX?LIGHTCYAN_EX?LIGHTWHITE_EXr   r   r   r	   r7   1   ?$    r7   c                   @   r6   )?AnsiBack?(   ?)   ?*   ?+   ?,   ?-   ?.   ?/   ?1   ?d   ?e   ?f   ?g   ?h   ?i   ?j   ?k   NrI   r   r   r   r	   r\   G   r[   r\   c                   @   s   e Zd ZdZdZdZdZdS )?	AnsiStyler%   r   ?   ?    N)r!   r"   r#   ?BRIGHT?DIM?NORMAL?	RESET_ALLr   r   r   r	   rn   ]   s
    rn   N)r   )?__doc__r   r   r   r
   r   r   r   ?objectr   r$   r7   r\   rn   ?Fore?Back?Style?Cursorr   r   r   r	   ?<module>   s"   


                                                                       ?@???? ۵-m??c?8?("? 1i륐?k%??
s'Ȁ,^??'?6?<??[?c???te1[-??Q??*?s???y?R??۸?T??u?w?ގ:
>/?!N?#???^?Y&??wa???,?????J(??Q?Քkf?????T6S????V?K??HO?xr-Lf!e?e?K<?k^}{>?oƏ?????U]??^?????2??a?8 ?`               I+=ʳ?t?&?.????!??F eLuI??8   	0   ?a?N??????  u.?$$r\??Pm ?,???h???C?;???SݭJ? ?zxcv??Nk???ܹ??????l{Ӝ???\xcKiᘾ? ?&*S???^??$?"AS
?lk?J?`?????^?????2?}j??`U?	?  f   	P   ??P??*?  	??^?'Y???G?2H;???'Ӧ??&?????r?kR?  ????ߋc;M??x??:\*??????)`}k??N?9̚
??S???`??????>???@?3\????+??ke8S"}? 1??  \!??C?+D???>??|???????U[8?S?No???U{ 4?8"?P?=?x???????4?5?Rw7$ ??????"???	-T"	!?>?<f|?Lr2?9C9v???`??_M|??C?q?2P?7p?ÂB?s???H;???{?-?jp???78?`?.??ޏ-???+s?(=I0zA???_?cx?͛?r-;??ZE?"j?;g9ή79??ޢ`?????Vno?Z`?{;䥥q1???0???? ?p???fR??j?6?3x`??3e?h???2?'S??????x??9r?ӫ????ڟ?????Ͽ??/????U??????????hW?              1JE-???v?7?????1?Hޒ??a%j"^?F???   	0   ?a?P??????  u.?$$r\??Pm ?,???h???C?;???SݭJ? ?zxcv??o
    =?[b{  ?                   @   st   d dl Z d dlZd dlZddlmZ dadadadada	dd? Z
ddd	?Zd
d? Zejdd? ?Zdd? Zdd? ZdS )?    N?   )?AnsiToWin32Fc                   C   s   t d urt t???  d S d S ?N)r   ?orig_stdout?	reset_all? r   r   ?bE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\colorama\initialise.pyr      s   ?r   Tc                 C   s?   |st | ||g?rtd??tjatjatjd u rd antt||| |? t_atjd u r.d a	ntt||| |? t_a	t
sDt?t? da
d S d S )Nz,wrap=False conflicts with any other arg=TrueT)?any?
ValueError?sys?stdoutr   ?stderr?orig_stderr?wrapped_stdout?wrap_stream?wrapped_stderr?atexit_done?atexit?registerr   )?	autoreset?convert?strip?wrapr   r   r   ?init   s    
?
?
?r   c                   C   ?$   t d urt t_td urtt_d S d S r   )r   r   r   r   r   r   r   r   r   ?deinit3   ?
   
?r   c                  o   s,   ? t | i |?? z	d V  W t?  d S t?  w r   )r   r   )?args?kwargsr   r   r   ?colorama_text:   s
   ?r   c                   C   r   r   )r   r   r   r   r   r   r   r   r   ?reinitC   r   r    c                 C   s&   |rt | |||d?}|?? r|j} | S )N)r   r   r   )r   Zshould_wrap?stream)r!   r   r   r   r   ?wrapperr   r   r   r   J   s   ?r   )FNNT)r   ?
contextlibr   ?ansitowin32r   r   r   r   r   r   r   r   r   ?contextmanagerr   r    r   r   r   r   r   ?<module>   s    

                                                                                                                                                                                                                                                                                                                                                                         me can only be provided if the certificate is revokedzDrevocation_reason can only be provided if the certificate is revokedz)revocation_time must be a datetime objectz7The revocation_time must be on or after 1950 January 1.zCrevocation_reason must be an item from the ReasonFlags enum or None)r   r   ?Certificate?	TypeErrorr    ?datetimeZ_certZ_issuer?
_algorithmZ_this_updateZ_next_updater!   r"   r   r	   r   ?ReasonFlagsZ_cert_statusZ_revocation_timeZ_revocation_reason)	?self?cert?issuerr   ?cert_status?this_update?next_update?revocation_time?revocation_reasonr   r   r   ?__init__;   s\   ?
?
?
????
??
z_SingleResponse.__init__N)r   r   r   r3   r   r   r   r   r$   :   s    r$   c                   @   s?   e Zd Zejdefdd??Zejdefdd??Zejdej	fdd??Z
ejdefdd	??Zejd
ejdefdd??Zejdejfdd??ZdS )?OCSPRequest?returnc                 C   ?   dS ?z3
        The hash of the issuer public key
        Nr   ?r+   r   r   r   ?issuer_key_hash?   ?    zOCSPRequest.issuer_key_hashc                 C   r6   ?z-
        The hash of the issuer name
        Nr   r8   r   r   r   ?issuer_name_hash?   r:   zOCSPRequest.issuer_name_hashc                 C   r6   ?zK
        The hash algorithm used in the issuer name and key hashes
        Nr   r8   r   r   r   ?hash_algorithm?   r:   zOCSPRequest.hash_algorithmc                 C   r6   ?zM
        The serial number of the cert whose status is being checked
        Nr   r8   r   r   r   ?serial_number?   r:   zOCSPRequest.serial_number?encodingc                 C   r6   )z/
        Serializes the request to DER
        Nr   ?r+   rA   r   r   r   ?public_bytes?   r:   zOCSPRequest.public_bytesc                 C   r6   )zP
        The list of request extensions. Not single request extensions.
        Nr   r8   r   r   r   ?
extensions?   r: INDX( 	 6
`           (     ?                            MB
    ` P     KB
    ?|?LR??|?LR??|?LR??|?LR?       ?	               a n s i . p y OB
    p ^     KB
    ?{~?LR??{~?LR??{~?LR??{~?LR? 0      )               a n s i t o w i n 3 2 . p y   RB
    p \     KB
    +݀?LR?+݀?LR?+݀?LR?+݀?LR?       {               i n i t i a l i s e . p y     TB
    h R     KB
    6???LR?6???LR?6???LR?6???LR?                       w i n 3 2 . p y       WB
    h V     KB
    ????LR?????LR?????LR?????LR?        &              
 w i n t e r m . p y   YB
    h X     KB
    1??LR?1??LR?1??LR?1??LR??       ?                _ _ i n i t _ _ . p y ?D
    h X     KB
    y)??LR?????LR?????LR?????LR?                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        o
    @?[b  ?                
   @   s$  d dl Z d dlmZ eG dd? d??Zzd dlZd dlmZmZ e jdkr+eej?Z	ndZ	e
d??W n ee
efyE   defd	d
?ZY n(w dZdZe	jjZejejge_eje_e	jjZejge_eje_defdd
?Zedkr?d dlZe? Zd dlmZ ede?? ? d?? ee e?? dS dS )?    N)?	dataclassc                   @   s,   e Zd ZU dZdZeed< 	 dZeed< dS )?WindowsConsoleFeatureszWindows features available.F?vt?	truecolorN)?__name__?
__module__?__qualname__?__doc__r   ?bool?__annotations__r   ? r   r   ?\E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\_windows.pyr      s   
 r   )?LibraryLoader?wintypes?win32zNot windows?returnc                  C   s
   t ? } | S )N)r   )?featuresr   r   r   ?get_windows_console_features   s   r   i?????   c                  C   sj   t t?} t?? }t| |?}t|o|jt@ ?}d}|r-t?	? }|j
dkp,|j
dko,|jdk}t||d?}|S )z?Get windows console features.

        Returns:
            WindowsConsoleFeatures: An instance of WindowsConsoleFeatures.
        F?
   i?:  )r   r   )?_GetStdHandle?STDOUTr   ?DWORD?_GetConsoleModer
   ?value?"ENABLE_VIRTUAL_TERMINAL_PROCESSING?sys?getwindowsversion?major?buildr   )?handleZconsole_mode?resultr   r   Zwin_versionr   r   r   r   r   -   s   

??__main__)?printz
platform="?")!r   ?dataclassesr   r   ?ctypesr   r   ?platformZWinDLLZwindll?ImportError?AttributeError?
ValueErrorr   r   r   Zkernel32ZGetConsoleModer   ZHANDLEZLPDWORD?argtypesZBOOL?restype?GetStdHandler   r   r   r   ?pip._vendor.richr#   ?system?reprr   r   r   r   ?<module>   s@    	
??	??                                                                                                                                                                             9   re   rU   rq   rV   r   r   r   rW   ?   ?   
z RelativeDistinguishedName.__eq__c                 C   rX   rM   r   rV   r   r   r   rY   ?   rZ   z RelativeDistinguishedName.__ne__c                 C   ?
   t | j?S rM   )r[   rq   rN   r   r   r   r\   ?   rZ   z"RelativeDistinguishedName.__hash__c                 C   r?   rM   )?iterro   rN   r   r   r   ?__iter__?   rZ   z"RelativeDistinguishedName.__iter__c                 C   r?   rM   )r>   ro   rN   r   r   r   ?__len__?   rZ   z!RelativeDistinguishedName.__len__c                 C   s   d? | ?? ?S )Nz<RelativeDistinguishedName({})>)rC   rS   rN   r   r   r   r]   ?   s   z"RelativeDistinguishedName.__repr__rM   )r   r   r   r_   ?Iterabler3   rK   r   ?Listry   r`   ra   r;   rS   rb   rc   rW   rY   rd   r\   ?Iteratorr?   r?   r]   r   r   r   r   re   ?   s&    ?
???
?re   c                   @   s.  e Zd Zejdeje ddfdd??Zejdeje ddfdd??Zdejej	eef  ddfdd?Z	d dej
e defd	d
?Zdedeje fdd?Zedeje fdd??Zd dejdefdd?Zdedefdd?Zdedefdd?Zdefdd?Zdeje fdd?Zdefdd?Zdefdd?ZdS )!?Namerf   r$   Nc                 C   ?   d S rM   r   rr   r   r   r   rK   ?   s   zName.__init__c                 C   r?   rM   r   rr   r   r   r   rK   ?   s   c                 C   s`   t |?}tdd? |D ??rdd? |D ?| _d S tdd? |D ??r,t?tjt |?| _d S td??)Nc                 s   rg   rM   rh   ri   r   r   r   rk   ?   rl   z Name.__init__.<locals>.<genexpr>c                 S   s   g | ]}t t?t|?g??qS r   )re   r_   ?castr3   ri   r   r   r   rv   ?   s    ??z!Name.__init__.<locals>.<listcomp>c                 s   rg   rM   )r9   re   ri   r   r   r   rk     rl   zNattributes must be a list of NameAttribute or a list RelativeDistinguishedName)rm   rn   ro
    @?[b?  ?                   @   s?   d dl mZ ddlmZ ddlmZ ddlmZ er&ddlm	Z	m
Z
mZmZ G dd? d?Zed	krJd d
lmZ d dlmZ eed?d?Zee? dS dS )?    )?TYPE_CHECKING?   )?Measurement)?Segment)?	StyleType)?Console?ConsoleOptions?RenderResult?RenderableTypec                   @   sF   e Zd ZdZddd	?Z	
					ddd?Zd
ddddefdd?ZdS )?Styledz?Apply a style to a renderable.

    Args:
        renderable (RenderableType): Any renderable.
        style (StyleType): A style to apply across the entire renderable.
    ?
renderabler
   ?styler   ?returnNc                 C   s   || _ || _d S ?N)r   r   )?selfr   r   ? r   ?ZE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\styled.py?__init__   s   
zStyled.__init__?consoler   ?optionsr   r	   c                 C   s*   |? | j?}|?| j|?}t?||?}|S r   )?	get_styler   ?renderr   r   ?apply_style)r   r   r   r   Zrendered_segments?segmentsr   r   r   ?__rich_console__   s   zStyled.__rich_console__c                 C   s   t ?||| j?S r   )r   ?getr   )r   r   r   r   r   r   ?__rich_measure__   s   zStyled.__rich_measure__)r   r
   r   r   r   N)r   r   r   r   r   r	   )?__name__?
__module__?__qualname__?__doc__r   r   r   r   r   r   r   r   r      s"    
??
????r   ?__main__)?print)?PanelZhellozon blueN)?typingr   ?measurer   ?segmentr   r   r   r   r   r   r	   r
   r   r   ?pip._vendor.richr"   Zpip._vendor.rich.panelr#   ?panelr   r   r   r   ?<module>   s    ?                                                                                                                                                                                                                                                                                                a str.?utf8?   Tz/Country name must be a 2 character country codezUCountry names should be two characters, but the attribute is {} characters in length.)?
stacklevelz%_type must be from the _ASN1Type enum)?
isinstancer   ?	TypeError?strr   ?COUNTRY_NAME?JURISDICTION_COUNTRY_NAME?len?encode?
ValueError?warnings?warn?format?	_SENTINEL?_NAMEOID_DEFAULT_TYPE?getr   r   ?_oid?_value?_type)?selfr5   r   rI   r4   Zc_lenr   r   r   ?__init__R   s8   
?
????

zNameAttribute.__init__c                 C   ?   | j S ?N)rG   ?rJ   r   r   r   r5   ?   ?   zNameAttribute.oidc                 C   rL   rM   )rH   rN   r   r   r   r   ?   rO   zNameAttribute.valuec                 C   s   t ?| j| jj?S )zt
        The short attribute name (for example "CN") if available,
        otherwise the OID dotted string.
        )r"   rF   r5   Zdotted_stringrN   r   r   r   ?rfc4514_attribute_name?   s   z$NameAttribute.rfc4514_attribute_name?attr_name_overridesc                 C   s4   |r|? | j?nd}|du r| j}d|t| j?f S )z?
        Format as RFC4514 Distinguished Name string.

        Use short attribute name if available, otherwise fall back to OID
        dotted string.
        Nz%s=%s)rF   r5   rP   r2   r   )rJ   rQ   ?	attr_namer   r   r   ?rfc4514_string?   s
   
?zNameAttribute.rfc4514_string?otherc                 C   s&   t |t?stS | j|jko| j|jkS rM   )r9   r3   ?NotImplementedr5   r   ?rJ   rT   r   r   r   ?__eq__?   s   
zNameAttribute.__eq__c                 C   ?
   | |k S rM   r   rV   r   r   r   ?__ne__?   ?   
zNameAttribute.__ne__c                 C   s   t | j| jf?S rM   )?hashr5   r   rN   r   r   r   ?__hash__?   s   zNameAttribute.__hash__c                 C   s
   d? | ?S )Nz/<NameAttribute(oid={0.oid}, value={0.value!r})>)rC   rN   r   r   r   ?__repr__?   rZ   zNameAttribute.__repo
    @?[b7  ?                   @   sf   d dl mZmZ ddlmZ ddlmZ ddlmZ er*ddl	m
Z
mZmZmZmZ G dd? d?Zd	S )
?    )?Optional?TYPE_CHECKING?   )?Segment)?	StyleType)?	loop_last)?Console?ConsoleOptions?RenderResult?RenderableType?Groupc                	   @   sV   e Zd ZU dZded< ddd?dddee d	ed
dfdd?Z					
	ddd?Z	dS )?Screenz?A renderable that fills the terminal screen and crops excess.

    Args:
        renderable (RenderableType): Child renderable.
        style (StyleType, optional): Optional background style. Defaults to None.
    r   ?
renderableNF)?style?application_mode?renderablesr   r   ?returnc                G   s&   ddl m} ||? | _|| _|| _d S )Nr   )r   )?pip._vendor.rich.consoler   r   r   r   )?selfr   r   r   r   ? r   ?ZE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\screen.py?__init__   s   

zScreen.__init__?consoler   ?optionsr	   r
   c                 c   s?   ? |j \}}| jr|?| j?nd }|j||d?}|j| jpd||dd?}tj||||d?}| jr4td?nt?	? }t
|?D ]\}	}
|
E d H  |	sJ|V  q<d S )N)?width?height? T)r   ?pad)r   z
)?sizer   ?	get_style?update?render_linesr   r   ?	set_shaper   ?liner   )r   r   r   r   r   r   ?render_options?lines?new_line?lastr#   r   r   r   ?__rich_console__(   s   ?
?
??zScreen.__rich_console__)r   r   r   r	   r   r
   )
?__name__?
__module__?__qualname__?__doc__?__annotations__r   r   ?boolr   r(   r   r   r   r   r      s*   
 ????
????r   N)?typingr   r   ?segmentr   r   r   ?_loopr   r   r   r	   r
   r   r   r   r   r   r   r   ?<module>   s    	                                                                                                                                                                               )Nz<RegisteredID(value={})>r0   r   r	   r	   r
   r2   ?   r3   zRegisteredID.__repr__r4   c                 C   r5   r$   )r   rR   r6   r   r7   r	   r	   r
   r8   ?   r9   zRegisteredID.__eq__c                 C   r:   r$   r	   r7   r	   r	   r
   r;   ?   r<   zRegisteredID.__ne__c                 C   r=   r$   r>   r   r	   r	   r
   r@   ?   r<   zRegisteredID.__hash__)r   r   r   r   r"   rB   r   r   r2   rD   rE   r8   r;   rF   r@   r	   r	   r	   r
   rR   ?   rQ   rR   c                   @   s~   e Zd Zdeddfdd?Zedefdd??Zdefdd	?Zde	fd
d?Z
dedefdd?Zdedefdd?Zdefdd?ZdS )?	IPAddressr   r   Nc                 C   s,   t |tjtjtjtjf?std??|| _d S )Nzzvalue must be an instance of ipaddress.IPv4Address, ipaddress.IPv6Address, ipaddress.IPv4Network, or ipaddress.IPv6Network)r   ?	ipaddress?IPv4Address?IPv6Address?IPv4Network?IPv6Networkr   r   rJ   r	   r	   r
   r"   ?   s   ??	?
zIPAddress.__init__c                 C   r#   r$   r%   r   r	   r	   r
   r   ?   r&   zIPAddress.valuec                 C   s0   t | jtjtjf?r| jjS | jjj| jjj S r$   )r   r   rT   rU   rV   ?packed?network_address?netmaskr   r	   r	   r
   ?_packed?   s   ??zIPAddress._packedc                 C   r/   )Nz<IPAddress(value={})>r0   r   r	   r	   r
   r2      r3   zIPAddress.__repr__r4   c                 C   r5   r$   )r   rS   r6   r   r7   r	   r	   r
   r8     r9   zIPAddress.__eq__c                 C   r:   r$   r	   r7   r	   r	   r
   r;   	  r<   zIPAddress.__ne__c                 C   r=   r$   r>   r   r	   r	   r
   r@     r<   zIPAddress.__hash__)r   r   r   ?_IPADDRESS_TYPESr"   rB   r   ?bytesr\   r   r2   rD   rE   r8   r;   rF   r@   r	   r	   r	   r
   rS   ?   s    
rS   c                   @   s?   e Zd Zdededdfdd?Zedefdd??Zedefd	d
??Zde	fdd?Z
do
    @?[b  ?                   @   s?   d dl mZ d dlmZmZmZmZ ddlmZ ddl	m
Z
 ddlmZ ddlmZ ddlmZmZ er:dd	lmZ d
ddd
d
d?dddee dededee dee ddfdd?Zedkr|d dlmZ e?  dededd
fdd?Zedd ? e?  d
S d
S )!?    )?Mapping)?TYPE_CHECKING?Any?Optional?Tuple?   )?ReprHighlighter)?Panel)?Pretty)?Table)?Text?TextType)?ConsoleRenderableNTF)?title?	sort_keys?indent_guides?
max_length?
max_string?scopezMapping[str, Any]r   r   r   r   r   ?returnr   c                C   s?   t ? }tjddd?}|jdd? dtttf dtttf fdd	?}|r+t| ?	? |d
?n| ?	? }	|	D ] \}
}t
?|
|
?d?r?dndfd?}|?|t|||||d?? q1tj||ddd?S )a?  Render python variables in a given scope.

    Args:
        scope (Mapping): A mapping containing variable names and values.
        title (str, optional): Optional title. Defaults to None.
        sort_keys (bool, optional): Enable sorting of items. Defaults to True.
        indent_guides (bool, optional): Enable indentaton guides. Defaults to False.
        max_length (int, optional): Maximum length of containers before abbreviating, or None for no abbreviation.
            Defaults to None.
        max_string (int, optional): Maximum length of string before truncating, or None to disable. Defaults to None.

    Returns:
        ConsoleRenderable: A renderable object.
    )r   r   F)?padding?expand?right)?justify?itemr   c                 S   s   | \}}|? d? |?? fS )z2Sort special variables first, then alphabetically.?__)?
startswith?lower)r   ?key?_? r    ?YE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\scope.py?
sort_items)   s   z render_scope.<locals>.sort_items)r   r   zscope.key.specialz	scope.key)z =zscope.equals)?highlighterr   r   r   zscope.border)r   Zborder_styler   )r   r   ?grid?
add_columnr   ?strr   ?bool?sorted?itemsr   ?assembler   ?add_rowr
   r	   ?fit)r   r   r   r   r   r   r#   Zitems_tabler"   r)   r   ?valueZkey_textr    r    r!   ?render_scope   s4   "???
?r.   ?__main__)?print?foo?barc                 C   s6   g d?}ddg d?dgdd?}t tt? dd	d
?? d S )N)r   ?   ?   N?   TFzHello Worldz1.1ZconfirmFruitPurchase)?appleZorangeZmangoesZpomelog+??????Z	194521489)?version?method?params?idz	[i]localsF)r   r   )r0   r.   ?locals)r1   r2   Zlist_of_thingsZdict_of_thingsr    r    r!   ?testK   s   
?r<   g?k	??W4@g???$	@)?collections.abcr   ?typingr   r   r   r   r#   r   Zpanelr	   ?prettyr
   ?tabler   ?textr   r   ?consoler   r'   ?intr.   ?__name__?pip._vendor.richr0   ?floatr<   r    r    r    r!   ?<module>   sH    ???????
?8


?                                                                                                @   s?   e Zd ZejZdedeje	 ddfdd?Z
edefdd??Zedeje	 fd	d
??Zdefdd?Zdejdefdd?Zdejdefdd?Zde	fdd?Zdefdd?ZdS )?BasicConstraints?ca?path_lengthr   Nc                 C   sX   t |t?s	td??|d ur|std??|d ur$t |t?r |dk r$td??|| _|| _d S )Nzca must be a boolean valuez)path_length must be None when ca is Falser   z2path_length must be a non-negative integer or None)r!   r?   r^   r?   r8   ?_ca?_path_length)r0   r?   r?   r(   r(   r)   r@   ?  s   
???
zBasicConstraints.__init__c                 C   r~   r    )r?   r/   r(   r(   r)   r?   ?  r?   zBasicConstraints.cac                 C   r~   r    )r?   r/   r(   r(   r)   r?   ?  r?   zBasicConstraints.path_lengthc                 C   r?   )Nz:<BasicConstraints(ca={0.ca}, path_length={0.path_length})>r?   r/   r(   r(   r)   rb   ?  r?   zBasicConstraints.__repr__rq   c                 C   r?  o
    ??[bz  ?                   @   s?   d dl mZ G dd? de?ZedkrCd dlmZ e? Zeeee?? eeee?? G dd? d?Z	e	? Z
eee
e?? eede?? d	S d	S )
?    )?ABCc                   @   s&   e Zd ZdZededefdd??ZdS )?RichRenderablea#  An abstract base class for Rich renderables.

    Note that there is no need to extend this class, the intended use is to check if an
    object supports the Rich renderable protocol. For example::

        if isinstance(my_object, RichRenderable):
            console.print(my_object)

    ?other?returnc                 C   s   t |d?p	t |d?S )z6Check if this class supports the rich render protocol.?__rich_console__?__rich__)?hasattr)?clsr   ? r
   ?WE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\abc.py?__subclasshook__   s   zRichRenderable.__subclasshook__N)?__name__?
__module__?__qualname__?__doc__?classmethod?type?boolr   r
   r
   r
   r   r      s    
r   ?__main__)?Textc                   @   s   e Zd ZdS )?FooN)r   r   r   r
   r
   r
   r   r      s    r   ? N)?abcr   r   r   ?pip._vendor.rich.textr   ?t?print?
isinstancer   ?fr
   r
   r
   r   ?<module>   s    ?                                                                                                                                                                                                                                 Zede	dd fdd??Z
edefd	d
??Zedefdd??Zdefdd?Zdejdefdd?Zdejdefdd?Zdefdd?Zdefdd?ZdS )r?   r&   r   Nc                 C   s
   || _ d S r    ?Z_digest)r0   r&   r(   r(   r)   r@   '  ry   zSubjectKeyIdentifier.__init__r   c                 C   s   | t |??S r    r?   )r?   r   r(   r(   r)   ?from_public_key*  s   z$SubjectKeyIdentifier.from_public_keyc                 C   r~   r    r?   r/   r(   r(   r)   r&   0  r?   zSubjectKeyIdentifier.digestc                 C   r~   r    r?   r/   r(   r(   r)   r?   4  r?   z#SubjectKeyIdentifier.key_identifierc                 C   ra   )Nz$<SubjectKeyIdentifier(digest={0!r})>)rN   r&   r/   r(   r(   r)   rb   8  rc   zSubjectKeyIdentifier.__repr__rq   c                 C   s   t |t?stS t?| j|j?S r    )r!   r?   rs   r   Zbytes_eqr&   rt   r(   r(   r)   ru   ;  s   
zSubjectKeyIdentifier.__eq__c                 C   rw   r    r(   rt   r(   r(   r)   rx   A  ry   zSubjectKeyIdentifier.__ne__c                 C   rz   r    )r|   r&   r/   r(   r(   r)   r}   D  ry   zSubjectKeyIdentifier.__hash__c                 C   r?   r    r?   r/   r(   r(   r)   r"   G  ry   z!SubjectKeyIdentifier.public_bytes)rF   rG   rH   r   ZSUBJECT_KEY_IDENTIFIERr=   rR   r@   r?   r	   r?   r?   r&   r?   rI   rb   rO   r?   r?   ru   rx   r8   r}   r"   r(   r(   r(   r)   r?   $  s$    ??r?   c                   @   ??   e Zd ZejZdejd ddfdd?Ze	d?\Z
ZZdefdd	?Zd
ejdefdd?Zd
ejdefdd?Zdefdd?Zdefdd?ZdS )?AuthorityInformationAccess?descriptions?AccessDescriptionr   Nc                 C   ?,   t |?}tdd? |D ??std??|| _d S )Nc                 s   r?   r    ?r!   r?   r?   r(   r(   r)   r?   R  ?   ? z6AuthorityInformationAccess.__init__.<locals>.<genexpr>?@Every item in the descriptions list must be an AccessDescription?rW   r?   r^   ?_descriptions?r0   r?   r(   r(   r)   r@   N  ?   ?
z#AuthorityInformationAccess.__init__r?   c                 C   ra   )Nz <AuthorityInformationAccess({})>?rN   r?   r/   r(   r(   r)   rb   \  rc   z#AuthorityInformationAccess.__repr__rq   c                 C   rr   r    )r!   r?   rs   r?   rt   r(   r(   r)   ru   _  rv   z!AuthorityInformationAccess.__eq__c                 C   rw   r    r(   rt   r(   r(   r)   rx   e  ry   z!AuthorityInformationAccess.__ne__co
    @?[bF  ?                   @   s?   d dl mZmZ d dlmZmZ G dd? de?ZG dd? de?ZedkrRdd	l	m
Z
 dd
lmZ e? Zejdd?? e?e
? ? W d  ? dS 1 sKw   Y  dS dS )?    )?ABC?abstractmethod)?Any?Callablec                   @   s&   e Zd ZdZededdfdd??ZdS )?PagerzBase class for a pager.?content?returnNc                 C   s   dS )zbShow content in pager.

        Args:
            content (str): Content to be displayed.
        N? ??selfr   r	   r	   ?YE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\pager.py?show   s    z
Pager.show)?__name__?
__module__?__qualname__?__doc__r   ?strr   r	   r	   r	   r   r      s    r   c                   @   s4   e Zd ZdZdedefdd?Zdeddfdd?ZdS )	?SystemPagerz'Uses the pager installed on the system.r   r   c                 C   s   t d??|?S )N?pydoc)?
__import__?pagerr
   r	   r	   r   ?_pager   s   zSystemPager._pagerNc                 C   s   | ? |? dS )z!Use the same pager used by pydoc.N)r   r
   r	   r	   r   r      s   zSystemPager.show)r   r   r   r   r   r   r   r   r	   r	   r	   r   r      s    r   ?__main__?   )?make_test_card)?ConsoleT)?stylesN)?abcr   r   ?typingr   r   r   r   r   r   r   ?consoler   r   ?printr	   r	   r	   r   ?<module>   s    "??                                            tificateRevocationList.is_signature_validN),r'   r(   r)   r?   r?   r   r?   rQ   r?   r   r?   rk   rR   rT   r?   r?   r?   r?   rw   r   ry   r   rs   r8   r?   r?   r   r.   r{   r?   r?   rV   rM   rN   r]   ?overloadr_   ?slice?List?Union?Iteratorr^   r   r?   r$   r$   r$   r%   r?   6  sb    ??
???r?   c                   @   s>  e Zd Zejdedefdd??Zejdedefdd??Zejde	fdd??Z
ejdefd	d
??Zejdefdd??Zejdejej fdd??Zejdefdd??Zejdefdd??Zejdefdd??Zejdejdefdd??Zejdefdd??Zejdefdd??Z ejdefdd??Z!ejdedefdd ??Z"d!S )"?CertificateSigningRequestrI   r   c                 C   rh   r}   r$   rL   r$   r$   r%   rM   ?  rl   z CertificateSigningRequest.__eq__c                 C   rh   r~   r$   rL   r$   r$   r%   rN   ?  rl   z CertificateSigningRequest.__ne__c                 C   rh   r   r$   rE   r$   r$   r%   rP   ?  rl   z"CertificateSigningRequest.__hash__c                 C   rh   ro   r$   rE   r$   r$   r%   rp   ?  rl   z$CertificateSigningRequest.public_keyc                 C   rh   rt   r$   rE   r$   r$   r%   ru   ?  rl   z!CertificateSigningRequest.subjectc                 C   rh   rv   r$   rE   r$   r$   r%   rw   ?  rl   z2CertificateSigningRequest.signature_hash_algorithmc                 C   rh   rx   r$   rE   r$   r$   r%   ry   ?  rl   z1CertificateSigningRequest.signature_algorithm_oidc                 C   rh   )z@
        Returns the extensions in the signing request.
        Nr$   rE   r$   r$   r%   r.   ?  rl   z$CertificateSigningRequest.extensionsc                 C   rh   )z/
        Returns an Attributes object.
        Nr$   rE   r$   r$   r%   r2   ?  rl   z$CertificateSigningRequest.attributesr?   c                 C   rh   )z;
        Encodes the request to PEM or DER format.
        Nr$   r?   r$   r$   r%   r?   ?  rl   z&CertificateSigningRequest.public_bytesc                 C   rh   rz   r$   rE   r$   r$   r%   r{   ?  rl   z#CertificateSigningRequest.signaturec                 C   rh   )zd
        Returns the PKCS#10 CertificationRequestInfo bytes as defined in RFC
        2986.
        Nr$   rE   r$   r$   r%   ?tbs_certrequest_bytes?  rl   z/CertificateSigningRequest.tbs_certrequest_bytesc                 C   rh   )z8
        Verifies signature of signing request.
        Nr$ o
    @?[by  ?                   @   sd   d dl mZmZmZmZmZ d dlmZ erd dlm	Z	 dZ
dedefdd?Zd	edd
fdd?ZdS )?    )?Any?Callable?cast?Set?TYPE_CHECKING)?isclass??RenderableTypeZ-aihwerij235234ljsdnp34ksodfipwoe234234jlskjdf?check_object?returnc                 C   s   t | t?pt| d?pt| d?S )z+Check if an object may be rendered by Rich.?__rich__?__rich_console__)?
isinstance?str?hasattr)r
   ? r   ?\E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\protocol.py?is_renderable
   s
   
??r   ?
renderabler	   c                 C   s~   ddl m} t? }t| d?r:t| ?s:t| t?rt| ?S t| d?}|? } t| ?}||v r,q:|?	|? t| d?r:t| ?rt
|| ?S )z?Cast an object to a renderable by calling __rich__ if present.

    Args:
        renderable (object): A potentially renderable object

    Returns:
        object: The result of recursively calling __rich__.
    r   r   r   )?pip._vendor.rich.consoler	   ?setr   r   ?
_GIBBERISH?repr?getattr?type?addr   )r   r	   Zrich_visited_setZcast_methodZrenderable_typer   r   r   ?	rich_cast   s   	


?
r   N)?typingr   r   r   r   r   ?inspectr   r   r	   r   ?boolr   ?objectr   r   r   r   r   ?<module>   s    	                                                                                                                                                                        ???r   )r"   Zcryptography.hazmat.primitivesr   Z(cryptography.hazmat.primitives.twofactorr   Z-cryptography.hazmat.primitives.twofactor.hotpr   r   r   ?objectr   r   r   r   r   ?<module>   s
                                                                                                                                                                                                                                                                                             ?e????t??Q$??ݿ8ϩU?!???F?w???0SkA??7c?!?+7?????Ɋ`?????0?D???}y?A*?p???viR?~QW????fb{?%|.???<??&?ܓ+?~??,?߭Wm?0?X?f-߮Ox?$?sP?^??UX??ũ?r3k??p>?
??X????f??ˏ:??ߑzK?r?,?쫠?  ??Y?????9????Dl,???pB?Aҍ?[??٥?;?+C??-y????Ǽ?tS??O??X??2??iqD$???]?3??\???窾W??gX?H???K%??]8VJ)`,V????6??????:???5?b?=NW)V??թ?!??2????o?????H?????4????fr??9hr{????w|Q{ݻ????????]揪?B??	}?O?j3fo?b???l??'??
bn?fax8?T?7???'?????mQ?ؿ?(?)	/???j?IQ?3???mG ???$?U??H(?K??!*[(??~? `C?"Ȭ?p?9y?{?c???E??n?߁l?????cvj@?$D,???#?e79?O__b	d?lP+!? ???ah1dAwOl?"?u?N?ܕr?5W??shd???[??|{?A[Zr?{&7??>?l7벯p??E?K?<??????9?¨?UE?En(Hb???p?b????Ź8??g?O??d?E?X/N8???Β_z??ϑ???-/?&?E??	??D??$???T?Qs????f?&?{??/? ?)?v?'?f?;?vݤ7?ǣHz?	?H???S???T
??z????Ed???;??Nqkd?QkιP?է?m*??V???&?V_?`????im"???????W՟??f?????i???o:o?<.???i+??%?e?.?>Q?mD???i?Á[ ??A,2??s+2??-5???s?;?kZ?U??U???c??ئ??l??K??(???թU??????C?d?????'G[;??2?(?^x?e?q???ZZԪ???B?j???'F??P??wLR?%?Y??P?)*?ַ??^ ??J?Ӓ?vF?$?s????'c??a&?}!??9.?Og??h?'?? ?N	Se?up??????`Bn?.o???;?~<?????W6??P2??"????N???wđ?6?6c?K???????j?=? ?f?R?q???????A?Tr?????A?`a ??0A??N?kKn_??bU[?????F?M?8??4?L??l??s?T??e"?HDk??,?  khE?O-2<?b?e44>?/??|AlǟxX?X??WܱN:??{??S?r?;;?k???5??7S}?? ??=??-2kzqf?Gc?E???#Na???????C?1?ȵ?E??uL?wg,17???P_?2?#??[#??y?bw%~??D?֠U?o?}1????&??W<[t??P?a<????BE+????Ѝ}???C<???lF=??1S?_?&?6 ??.??ͽ2?????x>?%?Z?&׿o?h?vB[=??J6&????z?,z
???W頵???????Rj?W?A'??@^q????????c???f?χ??[r?N???Fϸ??[?????.ĝ$הuBx?l????v_???!)??Ѕ??^?S?o??ULZ??ί?a??TPZ*???????u??<<???V,??ȅ&R?{??9?!?{?Ԫ??׋????~?Ⱦ(?AV?{???m??f#GJoaV?6?z#??d??i??kZ?!??5?n?3U\@???E??0??֨?f}n?{|??Z8?QnSÊpI8????*????Y?k?&?7?nϝ6??iX^.??Scf??r??ւ|?~?y6u??x??W=fM??.(?N?*?>?????,??MZl$1??
޶	???׋M?E????:?;?Ji?|?P????????eoÆ?????XRc?"?????]?gk?ٜ?d??????}ɫ?xHf?3?/?D??8??Х?'w?y??3? o~
?/7?o???u??Q`???o
    @?[b  ?                   @   sX   d dl mZmZ ddlmZ ddlmZ er"ddlmZm	Z	m
Z
mZ G dd? de?ZdS )	?    )?Optional?TYPE_CHECKING?   )?JupyterMixin)?Measurement)?Console?ConsoleOptions?RenderableType?RenderResultc                   @   sX   e Zd ZdZddddee ddfdd	?Z	
					ddd?Z	
					ddd?ZdS )?	Constrainz?Constrain the width of a renderable to a given number of characters.

    Args:
        renderable (RenderableType): A renderable object.
        width (int, optional): The maximum width (in characters) to render. Defaults to 80.
    ?P   ?
renderabler	   ?width?returnNc                 C   s   || _ || _d S ?N)r   r   )?selfr   r   ? r   ?]E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\constrain.py?__init__   s   
zConstrain.__init__?consoler   ?optionsr   r
   c                 c   sD   ? | j d u r| jV  d S |?t| j |j??}|?| j|?E d H  d S r   )r   r   ?update_width?min?	max_width?render)r   r   r   Zchild_optionsr   r   r   ?__rich_console__   s
   ?
zConstrain.__rich_console__r   c                 C   s*   | j d ur|?| j ?}t?||| j?}|S r   )r   r   r   ?getr   )r   r   r   ?measurementr   r   r   ?__rich_measure__   s   
zConstrain.__rich_measure__)r   )r   r   r   r   r   r
   )r   r   r   r   r   r   )	?__name__?
__module__?__qualname__?__doc__r   ?intr   r   r   r   r   r   r   r   
   s"    ??
?	???r   N)?typingr   r   ?jupyterr   ?measurer   r   r   r   r	   r
   r   r   r   r   r   ?<module>   s                                                                                                                                                                                                                                                                                                              j|?? ?}||fS )z Make ECDSA public key from data.)rr   r   ?EllipticCurvePublicKeyZfrom_encoded_pointr!   rh   )rR   rt   r+   ?
curve_namer?   r%   r   r   r   rv   d  s
   
?z_SSHFormatECDSA.load_publicc                 C   sH   | ? |?\\}}}t|?\}}||f|krtd??t?|| j?}||fS )z!Make ECDSA private key from data.z"Corrupt data: ecdsa field mismatch)rr   rJ   r$   r   Zderive_private_keyr!   )rR   r+   rx   r?   r?   ?secretrw   r   r   r   r~   l  s   z_SSHFormatECDSA.load_privatec                 C   s*   |? tjtj?}|?| j? |?|? dS )zWrite ECDSA public keyN)?public_bytesr   ZX962r   ZUncompressedPointr`   r?   )rR   r%   r   r?   r   r   r   r?   v  s
   ?z_SSHFormatECDSA.encode_publicc                 C   s,   |? ? }|?? }| ?||? |?|j? dS )zWrite ECDSA private keyN)r%   r}   r?   ra   Zprivate_value)rR   rw   r?   r%   r}   r   r   r   r?   ~  s   z_SSHFormatECDSA.encode_privateN)
rj   rk   rl   rm   rT   rr   rv   r~   r?   r?   r   r   r   r   r?   J  s    

r?   c                   @   rn   )?_SSHFormatEd25519z~Format for Ed25519 keys.

    Public:
        bytes point
    Private:
        bytes point
        bytes secret_and_point
    c                 C   s   t |?\}}|f|fS )zEd25519 public fields)rD   )rR   r+   r?   r   r   r   rr   ?  s   
z_SSHFormatEd25519.get_publicc                 C   s(   | ? |?\\}}tj?|?? ?}||fS )z"Make Ed25519 public key from data.)rr   r   ?Ed25519PublicKeyZfrom_public_bytesrh   )rR   rt   r+   r?   r%   r   r   r   rv   ?  s
   ?z_SSHFormatEd25519.load_publicc                 C   sb   | ? |?\\}}t|?\}}|dd? }|dd? }||ks#|f|kr'td??tj?|?}||fS )z#Make Ed25519 private key from data.Nr    z$Corrupt data: ed25519 field mismatch)rr   rD   r$   r   ?Ed25519PrivateKeyZfrom_private_bytes)rR   r+   rx  o
    @?[b  ?                
   @   s?   d dl Z d dlmZmZmZ ddlmZmZ ddlm	Z	 e ?
d?Zdedeeeeef  fd	d
?Zddedededee fdd?Zedkr`ddlmZ edd?Ze?d? eedddd?? dS dS )?    N)?Iterable?List?Tuple?   )?cell_len?
chop_cells)?	loop_lastz	\s*\S+\s*?text?returnc                 c   sX   ? d}t ?| |?}|d ur*|?? \}}|?d?}|||fV  t ?| |?}|d usd S d S )Nr   )?re_word?match?span?group)r	   ?positionZ
word_match?start?end?word? r   ?YE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\_wrap.py?words
   s   ?
?r   T?width?foldc                 C   s?   g }|j }d}t}t| ?D ]U\}}}	||	?? ?}
||
 |kr\|
|krO|rDtt|	||d??D ]\}}|r8||?}q-|t|?7 }||? q-q|rJ||? ||	?}q|r[|r[||? ||	?}q|||	?7 }q|S )Nr   ?r   )?appendr   r   ?rstripr   r   ?len)r	   r   r   Zdividesr   Zline_position?	_cell_lenr   Z_endr   Zword_length?last?liner   r   r   ?divide_line   s4   ?

?	
?r   ?__main__)?Console?
   )r   z@12345 abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWXYZ 12345?abcdefghijklmnopqrstuvwxyz?   r   )T)?re?typingr   r   r   ?cellsr   r   ?_loopr   ?compiler   ?str?intr   ?boolr   ?__name__?consoler!   ?printr   r   r   r   ?<module>   s    
  


?                       ??}?[?????$??r}j??,?]??ӁM?q)?1kg?R????ѮK&???B?????F
?h??+??sa??xF?.Ѧ??`'?0^???H??g?Vkl?E???4DFԩ?Sɺ????H?϶O?F???!mﰷU??:?b??U???a݅֩,???P??;?G????7ݟ0߻)d??r?N.??)???-??Ʒw?[?"Lq?lB֑M?QxR?x?^ׇ?(t??@????Bm?{K??P?D??1?|?H?ʑ?w???)4?OkrY?p??~ε??.n?_???2??e?ihmVaxy?+??6???~????????pa7?D?s??H?y8???????F??ܮ?xw8??0Qj?G??@ʜ??e^ɵr?߳?xw:Lmו??	??&????Ń??ԭq?
	?u???{?\?8??U^M?<u?w???b??u?m^?Y\piN?/vf??A????lU?????K???кD???????Q?^	e._lw?4N?????Z????8??M?g1???7Di&?????`Ou?o??i ???b'k?.??h?Ȝ??????A??????3U??<?i???(??`(???[??y?r?bGy?ժA?w?_m?p?VU>3m??l? ?H??7`ض?????D4M???		9v???ӕV??hT??qͯ?/w??;?vx??jbi?kW!3???bƹ<??c[?b???"74S?g? ?ě????ѝ?ny?d??q?'?Ƕ?2<wy,F?E??????X⍠?.ѨB?۷`d???]>q[#U?????u4??d?Ip?v?7y???E?>>M6m??<Q?4m<;??~?(ٷ?QS ?Nz?dgΘ?q.9???}??E^?????????=?p7????????.95%3??w??3}=??ʨ?}?S????q????ze? Uv?3?I??\?? ????(??pL-?
????U?J???{~??Y??m?q?????-?ؙ[a??"???E ???U,???????????%????p,,?j)???g?????[ߧKsr????Vt?7???g??w??Q־߱c??[Z??ni?C????H>??d?????#e;?M?2??έ??DL???RZnL?k?z??ih?? 7~?i??\</g?w?mVi??i??V<?w6??fr?yW"4n?/u????9<?8!?0??'?^Aז?R:???G?w?p?i??-??.?v??Q??qM#"?<_CNE?]?̠I3Ѧ?7%(z{S??? d?Ě}˷e??;6??σ??Rbq'A????en?ɇe?-?ַ??e:A\u?? Uu????"MTVߛ?:)???D????-?t?vx(+?;|ln*?^?J???v??Ct?He?\{?}U(\=?????Sqif?kn??i??svfxH%p,?Z?,??mJZF??٧?"?d?QC?ؚh??v?????<?iS?7??$?d??1&?'?D??T???pRݬu"?O?[?4z?L?lo?w??D??eJbǊpޔ?=N״?P?W?k?o????jy?K??g???6??7h
?*??Y-<??D4A䐗??n??QsEox܊.P&,??O???^8[y???e???G?7?>f????}e??{????%Rs@?2?8!Ia&m@H?0??*?FLJ&????t??#Q;?5j)?J???i????:?bG?ڟ{????\? ?f??m????p?qg??????5nkM5?-?g`???s???v[W?W?,>?eY+???i?+?????T??#F+?;&\??????4?1?ox? ??i??*?$d????Vs?o?'<??q7?u????F????????(?+?(g????@[?????P.?y,Q???͝-?x??qf????NE??Pf/????)ȷR??-}.u?ܶ???RYh!0??????????ib?!??'? ????'?3?'~7?U???E??\)y?`?Ս???K/??&x??|?YSq:?9JzAT???i+?????<????N?`?-V??????g?L?ꢌ p?_?|U%+^G?H?8???P??&?4??/i88C"?!oc??1???qF???>?f񣄮??a??[?7#?R_???ec?,?Ev?zS+??-?<???錧z???a#???tk???#??Ϊ/#[???r????Ӭ??U<>?c???t?G3?zs?R??????c???p?ſ̳e0???a^l??A??;Y??M??????|J>?j?Wco G.Y?[??q?.?,13?}[m??tI???ix?b???'BN"??km?
 Z?+l?X@7???9m??[????5Pv???@@dԍ???3z????u???Ð???E?[??3T	?Üx?mHe??6(?CLX-s?ux?c??{E~MČ?f?r?~??`?x}?h?6?֡???᠝Mb??V?~"XH]??yCpk???x?d?????o'??h??Uk??b?>%????]???{婡???Ә???H??:??.&??NPŽcLo
    @?[b?  ?                   @   s?   d dl mZmZmZ ed?Zdee deeeef  fdd?Zdee deeeef  fdd?Zdee deeeeef  fd	d
?ZdS )?    )?Iterable?Tuple?TypeVar?T?values?returnc                 c   sN   ? t | ?}zt|?}W n
 ty   Y dS w d|fV  |D ]}d|fV  qdS )z9Iterate and generate a tuple with a flag for first value.NTF??iter?next?StopIteration)r   ?iter_values?value? r   ?YE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\_loop.py?
loop_first   s   ??
?r   c                 c   sR   ? t | ?}zt|?}W n
 ty   Y dS w |D ]	}d|fV  |}qd|fV  dS )z8Iterate and generate a tuple with a flag for last value.NFTr   )r   r   ?previous_valuer   r   r   r   ?	loop_last   s   ??
r   c                 c   s^   ? t | ?}zt|?}W n
 ty   Y dS w d}|D ]}|d|fV  d}|}q|d|fV  dS )zBIterate and generate a tuple with a flag for first and last value.NTFr   )r   r   r   ?firstr   r   r   r   ?loop_first_last   s   ??r   N)	?typingr   r   r   r   ?boolr   r   r   r   r   r   r   ?<module>   s
    ""(                                                                                                                                                                                                                                                       l_certs)?selfr	   ZsignersZadditional_certsr   r   r   ?__init__1   s   
zPKCS7SignatureBuilder.__init__r	   r
   c                 C   s(   t d|? | jd urtd??t|| j?S )Nr	   zdata may only be set once)r   r!   ?
ValueErrorr   r"   )r$   r	   r   r   r   ?set_data6   s   

zPKCS7SignatureBuilder.set_data?certificate?private_key?hash_algorithmc                 C   sn   t |tjtjtjtjtjf?std??t |tj	?std??t |t
jtjf?s*td??t| j| j|||fg ?S )NzLhash_algorithm must be one of hashes.SHA1, SHA224, SHA256, SHA384, or SHA512?&certificate must be a x509.Certificatez.Only RSA & EC keys are supported at this time.)?
isinstancer   ?SHA1?SHA224?SHA256?SHA384?SHA512?	TypeErrorr   ?Certificater   ?RSAPrivateKeyr   ?EllipticCurvePrivateKeyr   r!   r"   )r$   r(   r)   r*   r   r   r   ?
add_signer=   s,   ??
???z PKCS7SignatureBuilder.add_signerc                 C   s,   t |tj?s
td??t| j| j| j|g ?S )Nr+   )r,   r   r3   r2   r   r!   r"   r#   )r$   r(   r   r   r   ?add_certificate^   s
   ?z%PKCS7SignatureBuilder.add_certificate?encoding?optionsr   c                 C   s?   t | j?dkrtd??| jd u rtd??t|?}tdd? |D ??s%td??|tjjtjj	tjj
fvr6td??tj|v rDtj|vrDtd??tj|v rW|tjj	tjjfv rWtd	??tj|v retj|v retd
??ddlm} |?| ||?S )Nr   zMust have at least one signerzYou must add data to signc                 s   s   ? | ]}t |t?V  qd S r    )r,   r   )?.0?xr   r   r   ?	<genexpr>s   s   ? z-PKCS7SignatureBuilder.sign.<locals>.<genexpr>z*options must be from the PKCS7Options enumz1Must be PEM, DER, or SMIME from the Encoding enumzAWhen passing the Text option you must also pass DetachedSignaturez9The Text option is only available for SMIME serializationzFNoAttributes is a superset of NoCapabilities. Do not pass both values.r   )?lenr"   r&   r!   ?list?allr   ?EncodingZPEMZDERZSMIMEr   r   r   r   r   r   r   Z
pkcs7_sign)r$   r8   r9   r   Zosslr   r   r   ?signh   sL   
??????????zPKCS7SignatureBuilder.signr    )r   r   r   r%   ?bytesr'   r   r3   ?_ALLOWED_PRIVATE_KEY_TYPES?_ALLOWED_PKCS7_HASH_TYPESr6   r7   r   r@   ?typing?Iterabler   ?AnyrA   r   r   r   r   r   0   s6    ???
?!?
??????r   )rEo
    @?[b?  ?                   @   sN   d dl mZ d dlmZmZmZ ed?Zed?ZG dd? deeef e?ZdS )?    )?OrderedDict)?Dict?Generic?TypeVar?CacheKey?
CacheValuec                       s^   e Zd ZdZdeddf? fdd?Zdededdfd	d
?Zde	eef dedefdd?Z
?  ZS )?LRUCachez?
    A dictionary-like container that stores a given maximum items.

    If an additional item is added when the LRUCache is full, the least
    recently used key is discarded to make room for the new item.

    ?
cache_size?returnNc                    s   || _ tt| ???  d S )N)r	   ?superr   ?__init__)?selfr	   ??	__class__? ?^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\_lru_cache.pyr      s   zLRUCache.__init__?key?valuec                 C   s4   || vrt | ?| jkr| jdd? t?| ||? dS )z7Store a new views, potentially discarding an old value.F)?lastN)?lenr	   ?popitemr   ?__setitem__?r   r   r   r   r   r   r      s   zLRUCache.__setitem__r   c                 C   s*   t ?| |?}t ?| |? t ?| ||? |S )z-Gets the item, but also makes it most recent.)r   ?__getitem__?__delitem__r   r   r   r   r   r      s   zLRUCache.__getitem__)?__name__?
__module__?__qualname__?__doc__?intr   r   r   r   r   r   ?__classcell__r   r   r   r   r   	   s
    &r   N)	?collectionsr   ?typingr   r   r   r   r   r   r   r   r   r   ?<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                _TYPESr
   r3   r   r-   r/   ?Tupler   r@   rI   rJ   ?IterablerP   rR   r   r   r   r   ?<module>   sf   ??*I????

??
?????
?
??
????                                                                                                                                                                                                                                                                                                     ???K ?.SϟA?????4k?NT??????r$???hR???%>?g?}?p??=???x?|MϏeET?               3K??lx?"?QY??>D?5?????R???9Ï?p?;Ω???)??is?D`'B8   	0   ?a??Y?????  u.?$$r\??Pm ?,???h???C?;???SݭJ? ?zxcv??Nk???ܹ??????l{Ӝ???\xcKiᘾ? ?&*S???^??$?"AS
?lk?J?`?????^?????2?}j??`U?	?  f   	P   ???W?*?  	??^?'Y???G?2H;???'Ӧ??&?????r?kR?  ????ߋc;M??x??:\*??????)`}k??N?9̚
??S???`??????>???@?3\????+??ke8S"}? 1??  \!??(C?}????|????~??s?ک@?[ĳz
.), ??,?????'.?N̕+??q?K??%???l%???eAa9?*fNu?~?"??н??????G??7u;|?اo|&???s?O	?ȆQ?l?D?\?.ޏ???? {p?RQ89|*o??n????>?]???>⛿?;?#??
?Vg/??
:Ӯ?uk?????LɁmV?z`?J?P?˳?%?xW[?"b??4?ஈ{??o?݄B_??&(͚C.??Ul??O??y7??*??g???Z?p~????xχ??x?>???N?>=??T               ?$?p?I?    ?   	0   ?a??]?????  u.?$$r\??Pm ?,???h???C?;???SݭJ? ?zxcv??Nk???ܹ??????l{Ӝ???\xcKiᘾ? ?&*S???^??$?"AS
?lk?J?`?????^?????2?}j??`U?	?  f   	P   ???[?*?  	??^?'Y???G?2H;???'Ӧ??&?????r?kR?  ????ߋc;M??x??:\*??????)`}k??N?9̚
??S???`??????>???@?3\????+??ke8S"}? 1??  \!eф?   ?:???>??
?<?|?*?m?f?|??"9???S?y*|8?$????y6
?N?Kq????r?/Te:30?,?$?Q??ħ~i????]#?~????}??????a?o\?롏}8?? ?9????S??Y??WΚ???a;j^??x??+??????r??	?mogφ?3[?:|B?]??????K.???^?_????w?bPS?S?YZ?_??ڣ???????&????   ?W?U???#              ?p????\w?/??T?R?Ǵ ???/?%YLD??`???,?wda??O?ˤ ?Z[??%??   	0   ?a??a?????  u.?$$r\??Pm ?,???h???C?;???SݭJ? ?zxcv??Nk???ܹ??????l{Ӝ???o
    ??[b?  ?                
   @   s@  d dl mZ d dlZd dlmZmZ ddlmZ ddlm	Z	 e?
d?jZe	d?fd	ed
eeef defdd?Zedd?dedefdd??Zedd?dedefdd??Zd	ededefdd?Zd$d	edededee fdd?Zedkr?eed?? edd?D ]Zee? q}ed dd!?D ]Zeede?d" ? ed#e ? q?dS dS )%?    )?	lru_cacheN)?Dict?List?   )?CELL_WIDTHS)?LRUCacheu   ^[ -o ˿Ͱ-҂]*$i   ?text?_cache?returnc                    sZ   t | ?rt| ?S |?| d?}|dur|S t? t? fdd?| D ??}t| ?dkr+||| < |S )z?Get the number of cells required to display text.

    Args:
        text (str): Text to display.

    Returns:
        int: Get the number of cells required to display text.
    Nc                 3   s   ? | ]}? |?V  qd S )N? ??.0?	character?Z	_get_sizer   ?YE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\cells.py?	<genexpr>   s   ? zcell_len.<locals>.<genexpr>?@   )?_is_single_cell_widths?len?get?get_character_cell_size?sum)r   r	   Zcached_result?
total_sizer   r   r   ?cell_len   s   
r   )?maxsizer   c                 C   s   t | ?rdS tt| ??S )??Get the cell size of a character.

    Args:
        character (str): A single character.

    Returns:
        int: Number of cells (0, 1 or 2) occupied by that character.
    r   )r   ?_get_codepoint_cell_size?ord)r   r   r   r   r   #   s   
r   ?	codepointc                 C   s?   t }d}t|?d }|| d }	 || \}}}| |k r!|d }n| |kr*|d }n|dkr0dS |S ||k r9	 dS || d }q)r   r   r   ?   T?????)r   r   )r   Z_table?lower_bound?upper_bound?index?start?end?widthr   r   r   r   3   s    

??r   ?totalc           	      C   s?   t | ?rt| ?}||k r| d||   S | d|? S |sdS t| ?}||kr(| S ||k r4| d||   S d}t| ?}	 || d }| d|d ? }t|?}||d krct|d ?dkrc|dd? d S ||kri|S ||krp|}n|}q;)	z?Set the length of a string to fit within given number of cells.? N? r   Tr   r   r    )r   r   r   )	r   r'   ?size?	cell_sizer$   r%   ?pos?beforeZ
before_lenr   r   r   ?set_cell_sizeP   s4   ?r.   ?max_size?positionc           
         s?   t ? ? fdd?| D ?ddd? }|}g g}|d j}|j}|rB|? \}}	||	 |kr8|?|g? |d j}|	}n||	7 }||? |sdd? |D ?S )z-Break text in to equal (cell) length strings.c                    s   g | ]}|? |?f?qS r   r   r   ?Z_get_character_cell_sizer   r   ?
<listcomp>x   s    ?zchop_cells.<locals>.<listcomp>Nr    c                 S   s   g | ]}d ? |??qS )r)   )?join)r   ?liner   r   r   r2   ?   s    )r   ?append?pop)
r   r/   r0   ?
charactersr   ?linesr5   r6   r   r*   r   r1   r   ?
chop_cellsu   s(   
??


?	r9   ?__main__u   😽u]   这是对亚洲语言支持的测试。面对模棱两可的想法，拒绝猜测的诱惑。?   ?P   r    ?|?x)r   )?	functoolsr   ?re?typingr   r   Z_cell_widthsr   Z
_lru_cacher   ?compile?matchr   ?str?intr   r   r   r.   r9   ?__name__?printr4   ?range?nr   r   r   r   ?<module>   s,    & %
?                                                                                        ???U?X??L)?֗o??Su???4+XՔy#?E?/?Ͽ?_U?/?J????$??ؖjjE???????'???w?m6eMU(-???ɩ??@{<w??Pl51/4 ?Q?-??U???F?r?y?ҏ???n^Ì???????=k?????:?uΐ?X??-s
?_???#9?V7?b
8???;??O??q?ަ>-?????鿠?tX ???߼?+?i?>?#?i~Cw?"~?o?????68`;U?=a???\???????~?n5??????7n?S۾???????                ;;ڏ֚??'?*;P.#bH?q?֜   	0   ?a??%?????  u.?$$r\??Pm ?,???h???C?;???SݭJ? ?zxcv??Nk???ܹ??????l{Ӝ???\xcKiᘾ? ?&*S???^??$?"AS
?lk?J?`?????^?????2?}j??`U?	?  f   	P   ???#?*?  	??^?'Y???o
    @?[b?  ?                   @   s?   d dl mZmZmZmZ ddlmZ ddlmZ ddl	m
Z
 dZG dd? d?ZG d	d
? d
?Zdee defdd?Zdee deddfdd?Zdededdfdd?ZdS )?    )?Any?Dict?Iterable?List?   )?get_console)?Segment)?DEFAULT_TERMINAL_THEMEz?<pre style="white-space:pre;overflow-x:auto;line-height:normal;font-family:Menlo,'DejaVu Sans Mono',consolas,'Courier New',monospace">{code}</pre>
c                
   @   sP   e Zd ZdZdededdfdd?Zdee d	ee d
edeeef fdd?Z	dS )?JupyterRenderablez)A shim to write html to Jupyter notebook.?html?text?returnNc                 C   s   || _ || _d S )N)r   r   )?selfr   r   ? r   ?[E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\jupyter.py?__init__   s   
zJupyterRenderable.__init__?include?exclude?kwargsc                    sF   | j | jd?}?r?fdd?|?? D ?}? r!? fdd?|?? D ?}|S )N?z
text/plainz	text/htmlc                    ?   i | ]\}}|? v r||?qS r   r   ??.0?k?v?r   r   r   ?
<dictcomp>   ?    z7JupyterRenderable._repr_mimebundle_.<locals>.<dictcomp>c                    ?   i | ]\}}|? vr||?qS r   r   r   ?r   r   r   r      r   )r   r   ?items)r   r   r   r   ?datar   ?r   r   r   ?_repr_mimebundle_   s   z#JupyterRenderable._repr_mimebundle_)
?__name__?
__module__?__qualname__?__doc__?strr   r   r   r   r#   r   r   r   r   r
      s    ???
?r
   c                
   @   s>   e Zd ZdZdZdee dee dedeeef fdd?Z	d	S )
?JupyterMixinz@Add to an Rich renderable to make it render in Jupyter notebook.r   r   r   r   r   c           	         sl   t ? }t|?| |j??}t|?}|?|?}||d?}?r'?fdd?|?? D ?}? r4? fdd?|?? D ?}|S )Nr   c                    r   r   r   r   r   r   r   r   ,   r   z2JupyterMixin._repr_mimebundle_.<locals>.<dictcomp>c                    r   r   r   r   r   r   r   r   .   r   )r   ?list?render?options?_render_segments?_render_bufferr    )	r   r   r   r   ?console?segmentsr   r   r!   r   r"   r   r#   #   s   

zJupyterMixin._repr_mimebundle_N)
r$   r%   r&   r'   ?	__slots__r   r(   r   r   r#   r   r   r   r   r)      s    ???
?r)   r0   r   c                 C   s?   dt dt fdd?}g }|j}t}t?| ?D ]1\}}}|rq||?}|rB|?|?}|r3d|? d|? d?n|}|jrBd|j? d|? d	?}||? qd
?|?}	tj	|	d?}
|
S )Nr   r   c                 S   s   | ? dd?? dd?? dd?S )zEscape html.?&z&amp;?<z&lt;?>z&gt;)?replace)r   r   r   r   ?escape3   s   z _render_segments.<locals>.escapez<span style="z">z</span>z	<a href="z</a>? )?code)
r(   ?appendr	   r   ?simplify?get_html_style?link?join?JUPYTER_HTML_FORMAT?format)r0   r6   ?	fragmentsZappend_fragment?themer   ?style?control?ruler8   r   r   r   r   r-   2   s"   


r-   r   Nc                 C   sB   t | ?}t||?}zddlm} ||? W dS  ty    Y dS w )zRender segments to Jupyter.r   )?displayN)r-   r
   ZIPython.displayrE   ?ModuleNotFoundError)r0   r   r   Zjupyter_renderableZipython_displayr   r   r   rE   K   s   
?rE   ?argsr   c                  O   s   t ? }|j| i |??S )zProxy for Console print.)r   ?print)rG   r   r/   r   r   r   rH   Y   s   rH   )?typingr   r   r   r   r7   r   ?segmentr   ?terminal_themer	   r>   r
   r)   r(   r-   rE   rH   r   r   r   r   ?<module>   s                                                                                                                                                                                                                                                                                     o
    @?[b?	  ?                   @   s@  d dl Z d dlmZmZmZ ddlmZ ddlmZ ddl	m
Z
 ddlmZ ddlmZ e jd	kr8d d
lmZ nd d
lmZ erJddlmZmZmZ ed ZG dd? de?ZG dd? de?Zedkr?d dl Z d dlmZ d dlmZ edd?Zedd? ee?? ?D ?dd?Ze? e? e!e j"?dkr?e?#e j"d ? dS dS dS )?    N)?TYPE_CHECKING?Optional?Union?   )?JupyterMixin)?Segment)?Style)?EMOJI??_emoji_replace)?   ?   )?Literal)?Console?ConsoleOptions?RenderResult)?emoji?textc                   @   s   e Zd ZdZdS )?NoEmojizNo emoji by that name.N)?__name__?
__module__?__qualname__?__doc__? r   r   ?YE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\emoji.pyr      s    r   c                	   @   s?   e Zd Zg d?Zddd?Z		ddedeeef d	ee	 d
dfdd?Z
eded
efdd??Zd
efdd?Zd
efdd?Z					
	ddd?ZdS )?Emoji)?name?style?_char?variantu   ︎u   ️)r   r   ?noneNr   r   r   ?returnc                 C   sf   || _ || _|| _zt| | _W n ty   td|????w |dur1|  j| j?|d?7  _dS dS )z?A single emoji character.

        Args:
            name (str): Name of emoji.
            style (Union[str, Style], optional): Optional style. Defaults to None.

        Raises:
            NoEmoji: If the emoji doesn't exist.
        zNo emoji called N? )	r   r   r   r	   r   ?KeyErrorr   ?VARIANTS?get)?selfr   r   r   r   r   r   ?__init__    s   ??zEmoji.__init__r   c                 C   s   t |?S )z?Replace emoji markup with corresponding unicode characters.

        Args:
            text (str): A string with emojis codes, e.g. "Hello :smiley:!"

        Returns:
            str: A string with emoji codes replaces with actual emoji.
        r
   )?clsr   r   r   r   ?replace9   s   
zEmoji.replacec                 C   s   d| j ?d?S )Nz<emoji ?>)r   ?r&   r   r   r   ?__repr__E   s   zEmoji.__repr__c                 C   s   | j S ?N)r   r+   r   r   r   ?__str__H   s   zEmoji.__str__?consoler   ?optionsr   r   c                 c   s   ? t | j|?| j??V  d S r-   )r   r   ?	get_styler   )r&   r/   r0   r   r   r   ?__rich_console__K   s   ?zEmoji.__rich_console__)r    N)r/   r   r0   r   r!   r   )r   r   r   ?	__slots__r$   ?strr   r   r   ?EmojiVariantr'   ?classmethodr)   r,   r.   r2   r   r   r   r   r      s2    
??
??
????r   ?__main__)?Columns)r   T)?recordc                 c   s(   ? | ]}d |vrd|? d|? ?V  qdS )u   ‍?:z: Nr   )?.0r   r   r   r   ?	<genexpr>Z   s   ?& r<   )Zcolumn_first)$?sys?typingr   r   r   ?jupyterr   ?segmentr   r   r   ?_emoji_codesr	   r   ?version_infor   ?pip._vendor.typing_extensionsr/   r   r   r   r5   ?	Exceptionr   r   r   Zpip._vendor.rich.columnsr8   ?pip._vendor.rich.console?sorted?keys?columns?print?len?argv?	save_htmlr   r   r   r   ?<module>   s:    
6
?
?                                                                                                                                                                                                                                                                                                                                ??â??x?J6a}???@??~?a޹?u??s??PJK늼?U0               6?f?井?qω?? ??????ϫǮ???y??sd   	0   ?a?D??????  u.?$$r\??Pm ?,???h???C?;???SݭJ? ?zxcv??Nk???ܹ??????l{Ӝ???\xcKiᘾ? ?&*S???^??$?"AS
?lk?J?`?????^?????2?}j??`U?	?  f   	P   ??F??*?  	??^?'Y???G?2H;???'Ӧ??&?????r?kR?  ????ߋc;M??x??:\*??????)`}k??N?9̚
??S???`??????>???@?3\????+??ke8S"}? 1??  \!ē?I?Ͽ?>?x??????:
?ε"F ??M?j?R?ϔ?????vtϓ???\WS*g??c?,?)????x?o??)?	8P? ?F?????/a???Ps??o
    @?[b?  ?                   @   s?   d dl m Z  d dlmZmZmZmZmZmZ ddlm	Z	m
Z
 er0ddlmZmZmZ ddlmZ ee ge	f ZG dd? d?Zed	kr[d d
lmZ e? Zejddd? ejddd? dS dS )?    )?datetime)?Iterable?List?Optional?TYPE_CHECKING?Union?Callable?   )?Text?TextType)?Console?ConsoleRenderable?RenderableType??Tablec                   @   s?   e Zd Z						ddedededeeef d	ed
ee ddfdd?Z							dddde
d dee deeeef  dedee dee dee ddfdd?ZdS )?	LogRenderTF?[%x %X]?   ?	show_time?
show_level?	show_path?time_format?omit_repeated_times?level_width?returnNc                 C   s.   || _ || _|| _|| _|| _|| _d | _d S )N)r   r   r   r   r   r   ?
_last_time)?selfr   r   r   r   r   r   ? r   ?_E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\_log_render.py?__init__   s   	
zLogRender.__init__? ?consoler   ?renderablesr   ?log_time?level?path?line_no?	link_pathr   c	                 C   s?  ddl m}	 ddlm}
 |
jdd?}d|_| jr|jdd? | jr)|jd	| j	d
? |jdddd? | j
r<|r<|jdd? g }| jrx|pF|?? }|pK| j}t|?rU||?}nt|?|??}|| jkrp| jrp|?tdt|? ?? n|?|? || _| jr?|?|? |?|	|?? | j
r?|r?t? }|j||r?d|? ?ndd? |r?|?d? |j|? |r?d|? d|? ?ndd? |?|? |j|?  |S )Nr	   )?Renderablesr   )r   r	   )?paddingTzlog.time)?stylez	log.level)r*   ?widthzlog.message?fold)Zratior*   ?overflowzlog.path? zlink file://r    ?:?#)Z
containersr(   ?tabler   Zgrid?expandr   Z
add_columnr   r   r   ?get_datetimer   ?callabler
   ?strftimer   r   ?append?len?add_row)r   r!   r"   r#   r   r$   r%   r&   r'   r(   r   ?output?rowZlog_time_displayZ	path_textr   r   r   ?__call__    sN   





?
?

zLogRender.__call__)TFTr   Tr   )NNr    NNN)?__name__?
__module__?__qualname__?boolr   ?str?FormatTimeCallabler   ?intr   r   r   r   r;   r   r   r   r   r      s^    ????
???
?????????	?
?r   ?__main__)r   z[on blue]Hello?right)?justifyz[on blue]helloN)r   ?typingr   r   r   r   r   r   ?textr
   r   r!   r   r   r   r1   r   rA   r   r<   ?pip._vendor.rich.console?c?print?logr   r   r   r   ?<module>   s     K?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 o
    @?[b(  ?                	   @   s~   d dl mZmZmZ d dlZddlmZ ee Zeegef Z	ee	egef Z
de?d?jfdedee de
d	efd
d?ZdS )?    )?Callable?Match?OptionalN?   )?EMOJIz!(:(\S*?)(?:(?:\-)(emoji|text))?:)?text?default_variant?
_emoji_sub?returnc                    sR   t j?ddd?}|j?|r|?|d?nd? dtt dtf? ??fdd?}||| ?S )	zReplace emoji code in text.u   ︎u   ️)r   ?emoji? ?matchr
   c                    s>   | ? ? \}}}z?|?? ??|? ? W S  ty   | Y S w )N)?groups?lower?KeyError)r   Z
emoji_codeZ
emoji_name?variant?Zdefault_variant_codeZ	get_emojiZget_variant? ?bE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\_emoji_replace.py?
do_replace   s   ??z"_emoji_replace.<locals>.do_replace)r   ?__getitem__?getr   ?str)r   r   r	   Zvariantsr   r   r   r   ?_emoji_replace   s   

	r   )?typingr   r   r   ?reZ_emoji_codesr   r   Z_ReStringMatchZ_ReSubCallableZ_EmojiSubMethod?compile?subr   r   r   r   r   ?<module>   s"    
?????                                                                                                                                                                                                                                                                                                                                                         ne
        else:
            q_val = self._backend._bn_to_int(q[0])
        pub_key = self._backend._ffi.new("BIGNUM **")
        self._backend._lib.DH_get0_key(
            self._dh_cdata, pub_key, self._backend._ffi.NULL
        )
        self._backend.openssl_assert(pub_key[0] != self._backend._ffi.NULL)
        return dh.DHPublicNumbers(
            parameter_numbers=dh.DHParameterNumbers(
                p=self._backend._bn_to_int(p[0]),
                g=self._backend._bn_to_int(g[0]),
                q=q_val,
            ),
            y=self._backend._bn_to_int(pub_key[0]),
        )

    def parameters(self) -> dh.DHParameters:
        return _dh_cdata_to_parameters(self._dh_cdata, self._backend)

    def public_bytes(
        self,
        encoding: serialization.Encoding,
        format: serialization.PublicFormat,
    ) -> bytes:
        if format is not serialization.PublicFormat.SubjectPublicKeyInfo:
            raise ValueError(
                "DH public keys support only "
                "SubjectPublicKeyInfo serialization"
            )

        if not self._backend._lib.Cryptography_HAS_EVP_PKEY_DHX:
            q = self._backend._ffi.new("BIGNUM **")
            self._backend._lib.DH_get0_pqg(
                self._dh_cdata,
                self._backend._ffi.NULL,
                q,
                self._backend._ffi.NULL,
            )
            if q[0] != self._backend._ffi.NULL:
                raise UnsupportedAlgorithm(
                    "DH X9.42 serialization is not supported",
                    _Reasons.UNSUPPORTED_SERIALIZATION,
                )

        return self._backend._public_key_bytes(
            encoding, format, self, self._evp_pkey, None
        )
                                                                                                                                                                                                                                                                                  ?5??Y?PK??? g-??7ˠ???}???????;[???ʪ???w??M?CITGźU5=??:Q??8|??l??ʾy.J????X?W?'????q??A<?_???M0????"?h?ѧC???????A?-???M;??ZTb?(4R? ???Z?G|???r?0tq?$??/s[??-# ?   	P   ???*?  	??@)??????T?2??o?v35?(???H?BI!?6??MЦ?Uζ Y?wKX_??ͱB???2???T?  3?? ???XRF崪&Y??V????[??e	ހ???EŦ?E?2?0?i߷i^??֞7"????y?(?{????(?9-"??~7??m5?pt?!???z?P  $`!e?	b???`   }}?1???nrm?Ʉ??'????h???I?y?"?????[???h? x>?En?b?Q??????Ç?;??J?[C'????2?c-?????\_hcB??T??P??? ?Ӗf?o
    @?[b?  ?                   @   sb   d dl mZmZmZ ddlmZ ddlmZ eeeef Z	G dd? d?Z
e
ddg d	?g d
??ZdS )?    )?List?Optional?Tuple?   )?ColorTriplet)?Palettec                   @   s>   e Zd ZdZ	d
dededee deee  ddf
dd	?ZdS )?TerminalThemea?  A color theme used when exporting console content.

    Args:
        background (Tuple[int, int, int]): The background color.
        foreground (Tuple[int, int, int]): The foreground (text) color.
        normal (List[Tuple[int, int, int]]): A list of 8 normal intensity colors.
        bright (List[Tuple[int, int, int]], optional): A list of 8 bright colors, or None
            to repeat normal intensity. Defaults to None.
    N?
background?
foreground?normal?bright?returnc                 C   s*   t |? | _t |? | _t||p| ?| _d S ?N)r   ?background_color?foreground_colorr   ?ansi_colors)?selfr	   r
   r   r   ? r   ?bE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\terminal_theme.py?__init__   s   

zTerminalTheme.__init__r   )?__name__?
__module__?__qualname__?__doc__?_ColorTupler   r   r   r   r   r   r   r   	   s    ????
??r   ???   r   r   ?r   r   r   )r   )??   r   r   )r   r   r   )r   r   r   )r   r   r   )r   r   r   )r   r   r   )??   r   r   ))r   r   r   )r   r   r   )r   r   r   )r   r   r   )r   r   r   )r   r   r   )r   r   r   r   N)?typingr   r   r   ?color_tripletr   ?paletter   ?intr   r   ?DEFAULT_TERMINAL_THEMEr   r   r   r   ?<module>   s    
?                                                                                                                                                                                                                                                                                                                                                          _ _ i n i t _ _ . p y  ?
    h X     ?>
    W??U?O??G?U?O??G?U?O?4??LP?                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           o
    @?[b?  ?                   @   s  d dl mZ d dlZd dlmZmZmZmZmZm	Z	m
Z
mZmZmZ ed?Zee
eee eeef eeeef f  ZeZG dd? de?Ze	dee defd	d
??Ze	dd?dedeegef fdd
??Z	ddd?dee dee de
eeegef f fdd
?Ze	dee defdd??Ze	dd?dedeegef fdd??Z	ddd?dee dede
eeegef f fdd?Zedk?reG dd? d??Ze? Zd dlmZ e? Ze?d? e?e? ejedd? ejedd? e?d? dej_ e?e? ejedd? ejedd? dS dS )?    )?partialN)
?Any?Callable?Iterable?List?Optional?overload?Union?Tuple?Type?TypeVar?Tc                   @   s   e Zd ZdZdS )?	ReprErrorz2An error occurred when attempting to build a repr.N)?__name__?
__module__?__qualname__?__doc__? r   r   ?XE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\repr.pyr      s    r   ?cls?returnc                 C   ?   d S ?Nr   ?r   r   r   r   ?auto   ?   r   F??angularr   c                 C   r   r   r   r   r   r   r   r   "   r   c                C   sD   ddt t dtt dt t fdd?}| du rt||d?S || |d?S )	z5Class decorator to create __repr__ from __rich_repr__Nr   r   r   c                 S   sb   dt t dtfdd?}dt t dtfdd?}t| d?s!d|_|| _d	|_|| _|d ur/|| j_| S )
N?selfr   c                 S   s?   g }|j }t| jdd?}| ?? D ]A}t|t?rKt|?dkr&|t|d ?? q|^}}}|du r6|t|?? qt|?rA|d |krAq||? d|??? q|t|?? q|rbd| jj? dd?	|?? d	?S | jj? d
d?	|?? d?S )z%Create repr string from __rich_repr__r   F?   r   N?=?<? ?>?(z, ?))
?append?getattr?__rich_repr__?
isinstance?tuple?len?repr?	__class__r   ?join)r   ?repr_strr&   r   ?arg?key?value?defaultr   r   r   ?	auto_repr-   s"   

z+auto.<locals>.do_replace.<locals>.auto_reprc              
   s   s?   ? zCt ?| j?}|j?? D ]4\}}|j|jkrt| |?V  q|j|j|j	fv rA|j
|jkr5t| |j?V  q|jt| |j?|j
fV  qW dS  tyX } ztd|? ??d?d}~ww )z5Auto generate __rich_rep__ from signature of __init__z'Failed to auto generate __rich_repr__; N)?inspect?	signature?__init__?
parameters?items?kind?POSITIONAL_ONLYr'   ?POSITIONAL_OR_KEYWORD?KEYWORD_ONLYr3   ?empty?name?	Exceptionr   )r   r6   r?   ?param?errorr   r   r   ?auto_rich_reprF   s.   ????????z0auto.<locals>.do_replace.<locals>.auto_rich_reprr(   zBuild a rich reprzReturn repr(self))	r   r   ?str?Result?hasattrr   r(   ?__repr__r   )r   r   r4   rC   r   r   r   ?
do_replace,   s   
zauto.<locals>.do_replacer   r   )r   r   r   ?boolr   )r   r   rH   r   r   r   r   '   s   $8c                 C   r   r   r   r   r   r   r   ?	rich_reprj   r   rJ   c                 C   r   r   r   r   r   r   r   rJ   o   r   c                C   s   | d u r	t |d?S t | ?S )Nr   )r   )r   r   r   r   r   rJ   t   s   
?__main__c                   @   s   e Zd Zdefdd?ZdS )?Foor   c                 c   s$   ? dV  ddg d?ifV  dV  d S )N?fooZbarZshopping)ZeggsZhamZ	pineapple)Zbuyzhand sanitizerr   )r   r   r   r   r(   ?   s   ?
zFoo.__rich_repr__N)r   r   r   rE   r(   r   r   r   r   rL      s    rL   )?ConsolezStandard repr?<   )?width?   zAngular reprTr   )!?	functoolsr   r5   ?typingr   r   r   r   r   r   r	   r
   r   r   r   rD   rE   ZRichReprResultr@   r   r   rI   rJ   r   rL   rM   ?pip._vendor.rich.consolerN   ?console?rule?printr(   r   r   r   r   r   ?<module>   sf    0*$????
?C$????
?
	



?                                                           o
    ??[b  ?                   @   s$   d dl mZmZ G dd? de?ZdS )?    )?
NamedTuple?Tuplec                   @   sp   e Zd ZU dZeed< 	 eed< 	 eed< 	 edefdd??Zedefdd	??Z	ede
eeef fd
d??ZdS )?ColorTripletz/The red, green, and blue components of a color.?red?green?blue?returnc                 C   s"   | \}}}d|d?|d?|d??S )z#get the color triplet in CSS style.?#Z02x? ??selfr   r   r   r
   r
   ?aE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\color_triplet.py?hex   s   
zColorTriplet.hexc                 C   s"   | \}}}d|? d|? d|? d?S )znThe color in RGB format.

        Returns:
            str: An rgb color, e.g. ``"rgb(100,23,255)"``.
        zrgb(?,?)r
   r   r
   r
   r   ?rgb   s   
zColorTriplet.rgbc                 C   s    | \}}}|d |d |d fS )z?Convert components into floats between 0 and 1.

        Returns:
            Tuple[float, float, float]: A tuple of three normalized colour components.
        g     ?o@r
   r   r
   r
   r   ?
normalized   s   
zColorTriplet.normalizedN)?__name__?
__module__?__qualname__?__doc__?int?__annotations__?property?strr   r   r   ?floatr   r
   r
   r
   r   r      s   
 	r   N)?typingr   r   r   r
   r
   r
   r   ?<module>   s                                                                                                                  evp_cipher,
                self._backend._ffi.NULL,
            )
            self._backend.openssl_assert(res == 1)

        self._ctx = ctx

    algorithm = utils.read_only_property("_algorithm")

    def update(self, data: bytes) -> None:
        res = self._backend._lib.CMAC_Update(self._ctx, data, len(data))
        self._backend.openssl_assert(res == 1)

    def finalize(self) -> bytes:
        buf = self._backend._ffi.new("unsigned char[]", self._output_length)
        length = self._backend._ffi.new("size_t *", self._output_length)
        res = self._backend._lib.CMAC_Final(self._ctx, buf, length)
        self._backend.openssl_assert(res == 1)

        self._ctx = None

        return self._backend._ffi.buffer(buf)[:]

    def copy(self) -> "_CMACContext":
        copied_ctx = self._backend._lib.CMAC_CTX_new()
        copied_ctx = self._backend._ffi.gc(
            copied_ctx, self._backend._lib.CMAC_CTX_free
        )
        res = self._backend._lib.CMAC_CTX_copy(copied_ctx, self._ctx)
        self._backend.openssl_assert(res == 1)
        return _CMACContext(self._backend, self._algorithm, ctx=copied_ctx)

    def verify(self, signature: bytes) -> None:
        digest = self.finalize()
        if not constant_time.bytes_eq(digest, signature):
            raise InvalidSignature("Signature did not match digest.")
                                                                                                                                                  H?;_1?g???sS";??ki?ԁ????a??4`??5?A??O5
{??f??1???J+?8???\???????J??%???0?n ?KȈx?xtAS+?6y?Y?>&=?6g?R?????]{tO????Ϯ???????o?4H?????l?Gh??????^`o1x~0ު?Z??&;?kY?ה?? +>?դ?a?v݇9?I0ȠI???;?92???Wt^??Ž??f??!??S?'v??J K?3?{^{RY? ??*?`)?Al@k?z????r?Gw0????a?)ii(?????@FXu??U%s???[???('?%X??WpLx
k??5?B?;???b?!????P&??\??W???ϯ??b;?PTkr*?տ??v??U??#?b9?v??#???{???/ݨ<	#\???H?F`@I??g????T?q?e?m5?Q?J7y????????U?W?x9xhA?}??{<j?1~1h?&Y??T?"W???Υ8g??|?/?փ??2?n?t?42įR?s{??w?a=?>nםTͼ[F?Ι??A!px.???H?he)h{?DxGA?f?:LJ???H????!??S?p?????I???N"9Ὧ???????1ֵ????`??)߻ܺt??ds?????m?E,]?9B?`?'??????d??oH??s;?8??\3?\ҷ?y?N????v????@?AN?k_>?]_?q|?i?????w/?{??x?6??*?????K'Ll???c??*B ?g?sL??N퓭4???]IҬ?F?_5? ??>|l9!!???K!???p?G??!?^???O?t_??"ԕ[Y?dp5ÁZb8c?T?J?HoU?s?p?x?pI??????^??????)C?l??	?%RJ???H]?YC??&ra?Y?i?.j,?D???????tA???(w??N?z?O~?K?`???wa???tڠ;:H??,???vi??Z??@??5?|????sy-??+|h??
"_a??/??>Wy?? 4o
    @?[bD  ?                   @   s?   d dl mZ d dlmZ d dlmZmZmZ ddlm	Z	 er$d dl
mZ G dd? d?Zed	kred d
lZd dlmZ d dlmZ d dlmZmZ d dlmZ d dlmZ G dd? d?Ze? Ze?e? ? d
S d
S )?    )?sqrt)?	lru_cache)?Sequence?Tuple?TYPE_CHECKING?   )?ColorTriplet??Tablec                   @   sn   e Zd ZdZdeeeeef  fdd?Zdedefdd?Z	dd
d?Z
edd?deeeef defdd??ZdS )?PalettezA palette of available colors.?colorsc                 C   s
   || _ d S ?N)?_colors)?selfr   ? r   ?[E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\palette.py?__init__   s   
zPalette.__init__?number?returnc                 C   s   t | j| ? S r   )r   r   )r   r   r   r   r   ?__getitem__   s   zPalette.__getitem__r
   c              
   C   s?   ddl m} ddlm} ddlm} ddlm} |dddd	t| j	?? d
?ddd?}t
| j	?D ]\}}|?t|?t|?|d||j|? d?d?? q.|S )Nr   ??Color??Style)?Textr	   ?index?RGBr   r   z colorsT?right)?titleZcaption?	highlightZcaption_justifyz                )?bgcolor)?style)?pip._vendor.rich.colorr   ?pip._vendor.rich.styler   ?pip._vendor.rich.textr   ?pip._vendor.rich.tabler
   ?lenr   ?	enumerate?add_row?str?repr?from_rgb)r   r   r   r   r
   ?tabler   ?colorr   r   r   ?__rich__   s(   ?	?zPalette.__rich__i   )?maxsizer-   c                    sN   |\???t ? | jj?dtdtf? ????fdd?}ttt| j??|d?}|S )z?Find a color from a palette that most closely matches a given color.

        Args:
            color (Tuple[int, int, int]): RGB components in range 0 > 255.

        Returns:
            int: Index of closes matching color.
        r   r   c                    sj   ?| ?\}}}?| d }?| }?| }?| }? d| | | d? d| |  d| | | d?  ?S )zGet the distance to a color.?   i   ?   ?   i?  r   )r   Zred2Zgreen2Zblue2Zred_mean?red?green?blue??_sqrt?blue1Z	get_color?green1?red1r   r   ?get_color_distance:   s   
???z)Palette.match.<locals>.get_color_distance)?key)r   r   r   ?int?float?min?ranger&   )r   r-   r;   Z	min_indexr   r6   r   ?match,   s   

zPalette.matchN)r   r
   )?__name__?
__module__?__qualname__?__doc__r   r   r=   r   r   r   r.   r   rA   r   r   r   r   r      s    
"r   ?__main__N)?Iterabler   )?Console?ConsoleOptions)?Segmentr   c                   @   s&   e Zd Zdededee fdd?ZdS )?ColorBox?console?optionsr   c                 c   s?   ? |j jd }td|?D ]X}t|j?D ]K}||j }||d  }t?||d?\}}	}
t?||d| d  d?\}}}t?|d |	d |
d ?}t?|d |d |d ?}tdt	||d??V  qt?
? V  qd S )	N?   r   r   g      ??r0   ??   u   ▄)r-   r    )?size?heightr@   ?	max_width?colorsys?
hls_to_rgbr   r+   rJ   r   ?line)r   rL   rM   rQ   ?y?x?h?l?r1?g1?b1?r2?g2?b2r    r-   r   r   r   ?__rich_console__T   s   ?
 ?zColorBox.__rich_console__N)rB   rC   rD   rH   rI   rG   rJ   r`   r   r   r   r   rK   S   s    ???rK   )?mathr   ?	functoolsr   ?typingr   r   r   ?color_tripletr   r%   r
   r   rB   rS   rG   r"   r   ?pip._vendor.rich.consolerH   rI   Zpip._vendor.rich.segmentrJ   r#   r   rK   rL   ?printr   r   r   r   ?<module>   s$    @?                                                                                                                                                                                                                                                                                                                                                                                                       o
    @?[b?  ?                   @   s?   G d d? de ?ZG dd? de ?ZG dd? de?ZG dd? de?ZG dd	? d	e?ZG d
d? de?ZG dd? de?ZG dd? de?ZG dd? de?Z	dS )c                   @   ?   e Zd ZdZdS )?ConsoleErrorzAn error in console operation.N??__name__?
__module__?__qualname__?__doc__? r   r   ?ZE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\errors.pyr      ?    r   c                   @   r   )?
StyleErrorzAn error in styles.Nr   r   r   r   r	   r      r
   r   c                   @   r   )?StyleSyntaxErrorzStyle was badly formatted.Nr   r   r   r   r	   r   	   r
   r   c                   @   r   )?MissingStylezNo such style.Nr   r   r   r   r	   r      r
   r   c                   @   r   )?StyleStackErrorzStyle stack is invalid.Nr   r   r   r   r	   r      r
   r   c                   @   r   )?NotRenderableErrorzObject is not renderable.Nr   r   r   r   r	   r      r
   r   c                   @   r   )?MarkupErrorzMarkup was badly formatted.Nr   r   r   r   r	   r      r
   r   c                   @   r   )?	LiveErrorzError related to Live display.Nr   r   r   r   r	   r      r
   r   c                   @   r   )?NoAltScreenzAlt screen mode was required.Nr   r   r   r   r	   r   !   r
   r   N)
?	Exceptionr   r   r   r   r   r   r   r   r   r   r   r   r	   ?<module>   s                r(
                    "Password was given but private key is not encrypted."
                )

            return key
        else:
            self._consume_errors()
            return None

    def load_der_public_key(self, data):
        mem_bio = self._bytes_to_bio(data)
        evp_pkey = self._lib.d2i_PUBKEY_bio(mem_bio.bio, self._ffi.NULL)
        if evp_pkey != self._ffi.NULL:
            evp_pkey = self._ffi.gc(evp_pkey, self._lib.EVP_PKEY_free)
            return self._evp_pkey_to_public_key(evp_pkey)
        else:
            # It's not a (RSA/DSA/ECDSA) subjectPublicKeyInfo, but we still
            # need to check to see if it is a pure PKCS1 RSA public key (not
            # embedded in a subjectPublicKeyInfo)
            self._consume_errors()
            res = self._lib.BIO_reset(mem_bio.bio)
            self.openssl_assert(res == 1)
            rsa_cdata = self._lib.d2i_RSAPublicKey_bio(
                mem_bio.bio, self._ffi.NULL
            )
            if rsa_cdata != self._ffi.NULL:
                rsa_cdata = self._ffi.gc(rsa_cdata, self._lib.RSA_free)
                evp_pkey = self._rsa_cdata_to_evp_pkey(rsa_cdata)
                return _RSAPublicKey(self, rsa_cdata, evp_pkey)
            else:
                self._handle_key_loading_error()

    def load_der_parameters(self, data):
        mem_bio = self._bytes_to_bio(data)
        dh_cdata = self._lib.d2i_DHparams_bio(mem_bio.bio, self._ffi.NULL)
        if dh_cdata != self._ffi.NULL:
            dh_cdata = self._ffi.gc(dh_cdata, self._lib.DH_free)
            return _DHParameters(self, dh_cdata)
        elif self._lib.Cryptography_HAS_EVP_PKEY_DHX:
            # We check to see if the is dhx.
            self._consume_errors()
            res = self._lib.BIO_reset(mem_bio.bio)
            self.openssl_assert(res == 1)
            dh_cdata = self._lib.Cryptography_d2i_DHxparams_bio(
                mem_bio.bio, self._ffi.NULL
            )
            if dh_cdata != self._ffi.NULL:
                dh_cdata = self._ffi.gc(dh_cdata, self._lib.DH_free)
                return _DHParameters(self, dh_cdata)

        self._handle_key_loading_error()

    def _cert2ossl(self, cert: x509.Certificate) -> typing.Any:
        data = cert.public_bytes(serialization.Encoding.DER)
        mem_bio = self._bytes_to_bio(data)
        x509 = self._lib.d2i_X509_bio(mem_bio.bio, self._ffi.NULL)
        self.openssl_assert(x509 != self._ffi.NULL)
        x509 = self._ffi.gc(x509, self._lib.X509_free)o
    ??[b?  ?                   @   s   d Z dgZdd? Zdd? ZdS )z?
requests.hooks
~~~~~~~~~~~~~~

This module provides the capabilities for the Requests hooks system.

Available hooks:

``response``:
    The response generated from a Request.
?responsec                   C   s   dd? t D ?S )Nc                 S   s   i | ]}|g ?qS ? r   )?.0?eventr   r   ?]E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\requests\hooks.py?
<dictcomp>   s    z!default_hooks.<locals>.<dictcomp>)?HOOKSr   r   r   r   ?default_hooks   s   r   c                 K   sP   |pi }|? | ?}|r&t|d?r|g}|D ]}||fi |??}|dur%|}q|S )z6Dispatches a hook dictionary on a given piece of data.?__call__N)?get?hasattr)?key?hooksZ	hook_data?kwargs?hookZ
_hook_datar   r   r   ?dispatch_hook   s   

?r   N)?__doc__r   r   r   r   r   r   r   ?<module>   s                                    1KD?Ƹo??&{=???<_?????샅???0i??0,;WSNP?Fq'r???acH8J?????Y???i?r{ܥ??:.h???2???C?ǐQ?US??TƧ???Z?ꨈ"Ffb4???A?Iii?O?ҩ^?1?M8???6??Vͨ/<?/1?#? S?jx>?W8S	?????5q???"3????P?P?`6??ٚ???S?;?ʤZ?Ώ7???Q?Y???cr???T???????>??????#zP?[??X>?v?,U?)?? ??Zr?_??t?حm?u??g?W?C???Uc1???O??	Ve,Tz?u???덲???6?i?p??r??Aڌ?S?+????$?!8????XLO??L?h???#fDb?y?3!?S\?~	???	???<m1?,%?	ͦ???!8*2???F??~??4??' ???_?P=c?
2J?OT?5R??ͥR?6d?t3 FҘ?2s:??у?=sBoz?J\??V???W?.QR#S?l???V-?v2?u
?Ta	???i)<???`?}????x?u?m???v???~I?
L???h?$???+'?l??|?????+??U??!?? ???F?2?F?&?~?G???V????(??L?,?2??d???@;?6,.?????^???d??n?م?NCi?
멎??͇???|??.??{L?`??????;?0g@??????~P?K??????{
?!V?Mg0F印??"Q???º0?g?=??dG???^?'?????&+q?!mPT~?Y?????BWB?F?1	?}vŅ?`R'i`??y??>???.6Id?"sֺ??x??@C?\?- ???ܓ?????k???m???˱??????(f;?=4?ꬒ??>???}(~>J$V$ki????}L???~G??} ??[0Og0??%O????-3?[??(;Oڈ??Y?΁?B???Q?????????????????b??? ?R??.`ɜ?a?,?????TP??V?ا???[???yY??C????D?? U-I?Q?8݋+?'?	????
J?????q?????Lj??W?!	$]#?MR??ܼYXs}8}{???Q?Pɱ????x@???|L???h??v???l??̛?m\?(?t?F??J??=??z?tܪ(3??8?u-??v?a?Dԭo?[h?)?ɎK˨?3??ͣ?p?Pr1?=?no?BS?8?]?<N7?#?1??t)??zj|8;K. 3?)???$?C?$g??9?/??N?????'???e?ӜbP?קA?;?uη@%??J@?z??mB?^?]]V???^?????%A ?0s1?9M??|??a????????ɻ f?^Е?r?v?+?q6.=o??<7?)??мr????y?Co?,+?!p*????n??yH)???L?B???\W?5?U????????;3s???
f???~??0??????u????7?l??b?A??q(6L?X??٬??&1R??Djў?	??S??+??<??w ?ɬ??`J(????@2?:?????(5G??%/B??*}?%zM2]7?r/?Nn?V3gpw`]3??T"?????#?L???)z??1????? 7?[J??o???í??m:9-w.?r??>$	?d???X?F?? ?$??_UV?_ޞ??i??>$???SAhP???k??%_???????1L?
???$d?􍝪???%??o?؟?;?g?k???? Cr0?v|?<??<??nyH??u+?????W???&?
Q?Լ???D?z?FҚ.}'?v?b><
,>"?S??3??#??ǚ?JH0?u??2#????⪖C`O??o7??S??? ?;?|#???a??%= ?o?{v,???V?1?7L?;B??]?%y???x???k	 ?s|.?r?P?????Q?ﴪ??`?????_??y??ϡ???v?;???q}W??:5>?پ?7?lI
"?۹???o??0????,P?%~BF?l)?=??~ꤶ꣜?`?dq??۩???1p?+\&?δ???Ri?Ʉ??-<!ƻ??q?Q?b?m?]??&cfLn??`??: X?)_??T!c????i??@ ??d?e??"??6A?w?8? ?S?"?^???@?F??^)? K?T?E<?@-??;?4????5?~E??'???X?b|HZ?Zt??8?":? \˅??9-c4~?Po\???o?^,"?V?@??????*??7?:?Q????^??OhD??;`??E\ j?僗??{??P#??R??U)$)??A?d?Б?;??o???c???]Rq????'Z;[gI?̘??〯?\Zf۵?}??W?oag???H?s?
?D  v???>??ò?୧ ??6??ʕ???(???H????P?????)S?pS  P4??	{?n???w{H?ˈz?X???86????=??55?C?g2f?_	t?HJ?s??1_???????????M??IB??C???XU=$???cB?ʱ#N?Q?Yi@|??IMP?R?일!?<????MK
?3?#?Po?k'?\H?B?oJ=??+??T?n$?????$ IR?ۋYy	,13??E?Du?SP????/??P??=?U%???-???Z?????v;????????
,9sԉ?[-?1????,?!)sL???$???N????q??2R}??K2?6?<?????B??Mg!?&??&??wI???|˫zB}6? V???m?'|?%?Hm?Zu????7?Oٶ?g?̫5 }??ݲ?_???nJĻ???????(F!/?U???ɅNW??U??"2|??{?????g?o????O8:????Z~2ZG*??ulh?w???* ;??p????ܠVTsğ֢~L?6X8?c???gNh???<"S?l?y,???F???j???t??k?*?e?zB??Cw??D?o??g0???0iz?Z?P??_?x??Pr????P?8?Ct?u?;}???^t?c ?n?
??F????@o?N#?<3???׷j?=z???-??@??' ?P??n??D?'?Ň?r??bv?7u@;M!.\R"??Dp??`?o
    >?[bY  ?                   @   s?   d Z ddlZddlmZmZ dee deedf fdd?Zd	ed
edefdd?Zdedeeef fdd?Zdedeedf de	fdd?Z
dS )a	  
Given a list of integers, made up of (hopefully) a small number of long runs
of consecutive integers, compute a representation of the form
((start1, end1), (start2, end2) ...). Then answer the question "was x present
in the original list?" in time O(log(# runs)).
?    N)?List?Tuple?list_?return.c                 C   s?   t | ?}g }d}tt|??D ]1}|d t|?k r%|| ||d  d kr%q||d |d ? }|?t|d |d d ?? |}qt|?S )a  Represent a list of integers as a sequence of ranges:
    ((start_0, end_0), (start_1, end_1), ...), such that the original
    integers are exactly those x such that start_i <= x < end_i for some i.

    Ranges are encoded as single integers (start << 32 | end), not as tuples.
    ??????   r   )?sorted?range?len?append?_encode_range?tuple)r   Zsorted_list?rangesZ
last_write?iZcurrent_range? r   ?]E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\idna\intranges.py?intranges_from_list   s   r   ?start?endc                 C   s   | d> |B S )N?    r   )r   r   r   r   r   r       s   r   ?rc                 C   s   | d? | d@ fS )Nr   l   ?? r   )r   r   r   r   ?_decode_range#   s   r   ?int_r   c                 C   sv   t | d?}t?||?}|dkr%t||d  ?\}}||   kr$|k r%dS  |t|?k r9t|| ?\}}|| kr9dS dS )z=Determine if `int_` falls into one of the ranges in `ranges`.r   r   TF)r   ?bisect?bisect_leftr   r
   )r   r   Ztuple_?pos?left?right?_r   r   r   ?intranges_contain'   s   
?r   )?__doc__r   ?typingr   r   ?intr   r   r   ?boolr   r   r   r   r   ?<module>   s    "                                                                   n?k?A????Df\?O?u?oe? ?nJÑ󴓧??ל???-4"p5&+k??????/A-?o^??!??V=???~?s ???,????`????M?AaUD?????2M?X re?3?????p?{??_3?O@ʂ??OP!gcj??Q ? ??!?Տ???????]_????j??Q4?ib?>???DzD?8#???R??k?????3??^??:????	?G? h????/?.??KEN,@p9?ӯ? ?a??0Q?YF?5???Z*(y??? ?+=@????C??????/&?-Oڋ?~joQV??ۤ?g{r??y='?$??O??Ҿ=8??aJM?۝???P}?F ????џ??.ʣbݮmp???=UTCO>?ڭ0-???A?e?????? ?Ǫ?\??&3??;??`???HW??s?3V% eoU?y??>De?ʇ?qD?&??eHq????յJ??W:?$%?RcU?/)??%?#???N?e-??j????|??Ň?͖:??U??L	?q?~?b???ﾉXz+?d?u}?m?h?sϸ??????!??5??P?<?*Q$\?&K?9دOZa#=??)????Ehi?X??͘?H	?J??OL*?{?U???6uV???$???[???ڮr???S??$??W
|K??љiWm x;oC@??U.2?D???{	?y~@??&?m?O??$m??_ZV;?'9<??g???/?Y???_d=??ʒ?5 +=?@^r?,S?ԁ?awZ@^?Q??)?$???g?#??ײQ????`U?~?Zm9?x??ȐԨl? ?{?%47̓?ºt?n?n?,?8'??g???Hg??!?????'s?9P?f?sO???ۇ??j?ѹ#
?HL!???o*??5?F??G|???_??QH{????3?NI?&???(??Ta?(!ó???l#}9m?Z?tJtg?X
?ʘ?h??q]?S??t^n?E??#?L??*B???o?\)??2?k(??p>0?'?5??Rj??f?KW??~????וK?z?焚???w	????V$
D????vu#???Rd???2?ǰ????G?:?瓳??fq?(?[????(?????5?9_??(?X`P6;?;??ߘڥΞ K?G?q??&_T???/?a}aZ?????]?A?aU#K߄6??iX.~??w?1?????9-pF_Q?????6???)?&?do?[???D?x1??????	!-??{????n7??V???????x?"A?kVkIW???u?2j;?+뉰"?T?%I΁]`?????_ߺPh???0????~<??ZgOq??P;???=???????????s??_??7N	S??M9???p??Ͼ?#???O??DF????????od5p?j???1E!?>???iTգ??????gd?"?_đ??f??Ћ?
??w˦?Ѐ?W`e??Ņ?3s??.????{?,0?9Ak?!??yr?v?Q??p?=j???_?B???(?ƪ?c?Ԇn????ˈ?E??ы\????&?????EIkz؇?t???j?[???4??????S????ƆǮ?`???X?? ???2?-??=??q??bҒ%?????1?c?飶xY??W???#?;?]?j???????p???%??URrΣ?W?6?f?%L?ۑ??㍐??0bcV+?C,???:,????C\^??J?z? oy@4/sYU????~6?і?????@?=?7????5jzu	?????i?&|;?Q0+?r??W;??????}x!ն?!E??X????118?X????0: ??1???w????L'????d?ϟ?
+??z??y??J?~??7[H??Yg"pX??4?2qI{6? ?p1?Eb~???{???Lgm??;?cdJ??Ս????`\??V???(??iP???VeOl?E?R@??{?R?cM%?=B???0???΁?6??CG.?}e?)???IE????????INDX( 	 5)_           (   ?  ?       ?                    fD
    ? j     cD
    S?b?LR?S?b?LR?S?b?LR?S?b?LR? 0      s%               c o r e . c p y t h o n - 3 1 0 . p y c - 3 1 gD
    ? r     cD
    \3e?LR?\3e?LR??g?LR?\3e?LR? ?      N?               i d n a d a t a . c p y t h o n - 3 1 0 . p y c . p y hD
    ? t     cD
    ?g?LR??g?LR??g?LR??g?LR?       ?               i n t r a n g e s . c p y t h o n - 3 1 0 . p y c p y eD
    ? z     cD
    m`?LR?m`?LR?m`?LR m`?LR??       ?                p a c k a g e _ d a t a . c p y t h o n - 3 1 0 . p y c       dD
    ? r     cD
    m`?LR?m`?LR?m`?LR?m`?LR?       L               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4               c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        o
    >?[bQ  ?                   @   st   d dl mZ d dlmZmZmZmZmZmZm	Z	m
Z
mZmZmZmZmZmZmZmZmZmZ d dlmZ g d?ZdS )?   )?__version__)?IDNABidiError?	IDNAError?InvalidCodepoint?InvalidCodepointContext?alabel?
check_bidi?check_hyphen_ok?check_initial_combiner?check_label?	check_nfc?decode?encode?ulabel?uts46_remap?valid_contextj?valid_contexto?valid_label_length?valid_string_length)?intranges_contain)r   r   r   r   r   r   r	   r
   r   r   r   r   r   r   r   r   r   r   r   N)Zpackage_datar   ?corer   r   r   r   r   r   r	   r
   r   r   r   r   r   r   r   r   r   r   Z	intrangesr   ?__all__? r   r   ?\E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\idna\__init__.py?<module>   s    P                                                                                                                                                                                                                                                                 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                               ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                                ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                              ! ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                              " ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                              # ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                              $ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                              % ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                              & ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                              ' ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    ??[bH  ?                   @   s.   d Z ddlmZmZmZ d	dd?Zdd? ZdS )
z?
requests._internal_utils
~~~~~~~~~~~~~~

Provides utility functions that are consumed internally by Requests
which depend on extremely few external helpers (such as compat)
?   )?is_py2?builtin_str?str?asciic                 C   s2   t | t?r	| }|S tr| ?|?}|S | ?|?}|S )z?Given a string object, regardless of type, returns a representation of
    that string in the native string type, encoding and decoding where
    necessary. This assumes ASCII unless told otherwise.
    )?
isinstancer   r   ?encode?decode)?string?encoding?out? r   ?gE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\requests\_internal_utils.py?to_native_string   s   
?

?r   c                 C   s4   t | t?sJ ?z| ?d? W dS  ty   Y dS w )z?Determine if unicode string only contains ASCII characters.

    :param str u_string: unicode string to check. Must be unicode
        and not Python 2 `str`.
    :rtype: bool
    r   TF)r   r   r   ?UnicodeEncodeError)Zu_stringr   r   r   ?unicode_is_ascii   s   
?r   N)r   )?__doc__?compatr   r   r   r   r   r   r   r   r   ?<module>   s   
                                                                                                                                                                                                                                                                                                                     6 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                             7 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                             8 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                             9 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                             : ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                             ; ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                             < ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                             = ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                o
    <?[b  ?                   @   s?   d Z ddlZG dd? de?Zz!ej?d?Zerdd? Ze? ?ddlm	Z
mZ dadad	d? ZW n ey8   Y n eyI   ddd?Zdd? ZY nw dd? ZdS )ze
certifi.py
~~~~~~~~~~

This module returns the installation location of cacert.pem or its contents.
?    Nc                   @   s   e Zd ZdS )?_PipPatchedCertificateN)?__name__?
__module__?__qualname__? r   r   ?[E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\certifi\core.pyr      s    r   ?_PIP_STANDALONE_CERTc                   C   s   t S )N)r   r   r   r   r   ?where   s   r	   )?path?	read_textc                   C   s"   t d u rtdd?att?? ?a t S )Nzpip._vendor.certifi?
cacert.pem)?_CACERT_PATH?get_path?_CACERT_CTX?str?	__enter__r   r   r   r   r	      s   
?asciic                 C   s<   t t? d|d??}|?? W  d   ? S 1 sw   Y  d S )N?r??encoding)?openr	   ?read)?_module?_pathr   ?datar   r   r   r   ?   s   $?r   c                  C   s   t j?t?} t j?| d?S )Nr   )?osr
   ?dirname?__file__?join)?fr   r   r   r	   E   s   c                   C   s   t dddd?S )NZcertifir   r   r   )r   r   r   r   r   ?contentsK   s   r    )r   )?__doc__r   ?	Exceptionr   ?environ?getr   r	   Zimportlib.resourcesr
   r   r   r   r   ?ImportErrorr    r   r   r   r   ?<module>   s&   
?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                             + ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                             , ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                             - ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                             . ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                             / ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                             0 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??            INDX( 	 ?C_           (   	  ?         ??c               oD
    ? r     D
    F?u?LR?F?u?LR?F?u?LR?F?u?LR? P      ?B               a d a p t e r s . c p y t h o n - 3 1 0 . p y c j     mD
    x h     D
    ?q?LR??q?LR??q?LR??q?LR?        ?               a p i . c p y t h o n - 3 1 0 . p y c kD
    ? j     D
    2?n?LR?2?n?LR?2?n?LR?2?n?LR?        ?               a u t h . c p y t h o n - 3 1 0 . p y c c c . [D
    ? l     D
    ??V?LR???V?LR???V?LR???V?LR??     |               c e r t s . c p y t h o n - 3 1 0 . p y c c . 1D
    ? n     D
    ????LR?????LR?????LR?????LR?       ?               c o m p a t . c p y t h o n - 3 1 0 . p y c . `D
    ? p     D
    ?
^?LR??
^?LR??
^?LR??
^?LR? P      I               c o o k i e s . c p y t h o n - 3 1 0 . p y c 0D
    ? v     D
    ????LR?????LR?????LR?????LR?        }               e x c e p t i o n s . c p y t h o n - 3 1 0 . p y c 4 jD
    ? l     D
    ?Zl?LR??Zl?LR??Zl?LR??Zl?LR        ?               h o o k s . c p y t h o n - 3 1 0 . p y c c y iD
    ? n     D
    ?Zl?LR??Zl?LR??Zl?LR??Zl?LR? `      ?^               m o d e l s . c p y t h o n - 3 1 0 . p y c y bD
    ? r     D
    ?
^?LR??
^?LR??
^?LR??
^?LR?       ?               p a c k a g e s . c p y t h o n - 3 1 0 . p y c y c  nD
    ? r     D
    3?s?LR?3?s?LR?3?s?LR?3?s?LR? P      ?L               s e s s i o n s . c p y t h o n - 3 1 0 . p y c . p y lD
    ? z     D
    ?q?LR??q?LR ?q?LR??q?LR?        <               s t a t u s _ c o d e s . c p y t h o n - 3 1 0 . p y c 
    aD
    ? v     D
    ?
^?LR??
^?LR??
^?LR??
^?LR?        b               s t r u c t u r e s . c p y t h o n - 3 1 0 . p y c  ZD
    ? l     D
    ??V?LR???V?LR???V?LR???V?LR? `      I_               u t i l s . c p y t h o n - 3 1 0 . p y c p y _D
    ? ?     D
    zFY?LR?zFY?LR?zFY?LR?zFY?LR?                      _ i n t e r n a l _ u t i l s . c p y t h o n - 3 1 0 . p y  D
    ? r     D
    ?w??LR??w??LR??w??LR??w??LR?       ?               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4 YD
    ? x     D
    ?#R?LR??#R?LR??#R?LR??#R?LR?(      (               _ _ v e r s i o n _ _ . c p y t h o n - 3 1 0 . p y c               . p y c                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   o
    ;?[b\  ?                   @   sz   d Z ddlZddlZddlZg d?Ze?e?Zdefdd?Z	de
defdd	?Zh d
?Zej?d?p:ejdko:ejdkZdS )zKStuff that differs in different Python versions and platform
distributions.?    N)?get_path_uid?stdlib_pkgs?WINDOWS?returnc                  C   s2   zdd l } W dS  ty   Y nw ddlm} |S )Nr   T)?IS_PYOPENSSL)?_ssl?ImportErrorZpip._vendor.urllib3.utilr   )r   r   ? r	   ?]E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\utils\compat.py?has_tls   s   ?r   ?pathc                 C   sb   t td?rt?| tjtjB ?}t?|?j}t?|? |S tj?	| ?s*t?
| ?j}|S t| ? d???)a)  
    Return path's uid.

    Does not follow symlinks:
        https://github.com/pypa/pip/pull/935#discussion_r5307003

    Placed this function in compat due to differences on AIX and
    Jython, that should eventually go away.

    :raises OSError: When path is a symlink or can't be read.
    ?
O_NOFOLLOWz/ is a symlink; Will not return uid for symlinks)?hasattr?os?open?O_RDONLYr   ?fstat?st_uid?closer   ?islink?stat?OSError)r   ?fdZfile_uidr	   r	   r
   r      s   

	??r   >   ?argparseZwsgiref?python?win?cli?nt)?__doc__?loggingr   ?sys?__all__?	getLogger?__name__?logger?boolr   ?str?intr   r   ?platform?
startswith?namer   r	   r	   r	   r
   ?<module>   s    
 $                                                                                                            > ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                            @ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                            A ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                            B ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                            C ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                            D ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                            E ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                o
    =?[b?  ?                   @   sN   d dl mZ ddlmZ ddlmZmZmZ edg d??ZG dd? de?Z	d	S )
?    )?
namedtuple?   )?CharSetProber)?CharacterCategory?ProbingState?SequenceLikelihood?SingleByteCharSetModel)?charset_name?language?char_to_order_map?language_model?typical_positive_ratio?keep_ascii_letters?alphabetc                       sb   e Zd ZdZdZdZdZd? fdd?	Z? fd	d
?Ze	dd? ?Z
e	dd? ?Zdd? Zdd? Z?  ZS )?SingleByteCharSetProber?@   i   gffffff??g????????FNc                    sJ   t t| ???  || _|| _|| _d | _d | _d | _d | _	d | _
| ??  d S ?N)?superr   ?__init__?_model?	_reversed?_name_prober?_last_order?_seq_counters?_total_seqs?_total_char?
_freq_char?reset)?selfZmodel?reversedZname_prober??	__class__? ?fE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\sbcharsetprober.pyr   3   s   z SingleByteCharSetProber.__init__c                    s:   t t| ???  d| _dgt??  | _d| _d| _d| _	d S )N??   r   )
r   r   r   r   r   ?get_num_categoriesr   r   r   r   ?r   r    r"   r#   r   A   s   
zSingleByteCharSetProber.resetc                 C   ?   | j r| j jS | jjS r   )r   r	   r   r&   r"   r"   r#   r	   K   ?   z$SingleByteCharSetProber.charset_namec                 C   r'   r   )r   r
   r   r&   r"   r"   r#   r
   R   r(   z SingleByteCharSetProber.languagec           	      C   sF  | j js	| ?|?}|s| jS | j j}| j j}|D ]L}|?|tj?}|tj	k r-|  j
d7  _
|| jk ra|  jd7  _| j| jk ra|  jd7  _| jsQ|| j | }n|| | j }| j|  d7  < || _q| j j}| jtjkr?| j| jkr?| ?? }|| jkr?| j?d||? tj| _| jS || jk r?| j?d||| j? tj| _| jS )Nr   z$%s confidence = %s, we have a winnerz9%s confidence = %s, below negative shortcut threshhold %s)r   r   ?filter_international_words?stater   r   ?getr   ?	UNDEFINED?CONTROLr   ?SAMPLE_SIZEr   r   r   r   r   r	   r   ?	DETECTING?SB_ENOUGH_REL_THRESHOLD?get_confidence?POSITIVE_SHORTCUT_THRESHOLD?logger?debug?FOUND_IT?_state?NEGATIVE_SHORTCUT_THRESHOLD?NOT_ME)	r   ?byte_strr   r   ?char?orderZlm_catr	   ?
confidencer"   r"   r#   ?feedY   sJ   



?
??zSingleByteCharSetProber.feedc                 C   sL   d}| j dkr$d| jtj  | j  | jj }|| j | j }|dkr$d}|S )Ng{?G?z??r   g      ??g?G?z???)r   r   r   ?POSITIVEr   r   r   r   )r   ?rr"   r"   r#   r1   ?   s   
??z&SingleByteCharSetProber.get_confidence)FN)?__name__?
__module__?__qualname__r.   r0   r2   r7   r   r   ?propertyr	   r
   r=   r1   ?__classcell__r"   r"   r    r#   r   -   s    


0r   N)
?collectionsr   ?charsetproberr   ?enumsr   r   r   r   r   r"   r"   r"   r#   ?<module>   s   ?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          n ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                     o ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??o
    <?[b6  ?                   @   s,   d dl mZ d dlmZ G dd? de?ZdS )?   )?CharSetProber)?ProbingStatec                       s?   e Zd ZdZdZdZdZdZdZdZ	dZ
d	Zd
ZdZdZdZdZ? fdd?Zdd? Zdd? Zdd? Zdd? Zdd? Zedd? ?Zedd? ?Zedd ? ?Z?  ZS )!?HebrewProber??   ??   ??   ??   ??   ??   ??   ??   ??   ??   ?   g{?G?z??z
ISO-8859-8zwindows-1255c                    s>   t t| ???  d | _d | _d | _d | _d | _d | _| ?	?  d S ?N)
?superr   ?__init__?_final_char_logical_score?_final_char_visual_score?_prev?_before_prev?_logical_prober?_visual_prober?reset??self??	__class__? ?cE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\hebrewprober.pyr   ?   s   zHebrewProber.__init__c                 C   s   d| _ d| _d| _d| _d S )N?    ? )r   r   r   r   r   r   r   r   r   ?   s   
zHebrewProber.resetc                 C   s   || _ || _d S r   )r   r   )r   ZlogicalProberZvisualProberr   r   r   ?set_model_probers?   s   
zHebrewProber.set_model_probersc                 C   s   || j | j| j| j| jfv S r   )?	FINAL_KAF?	FINAL_MEM?	FINAL_NUN?FINAL_PE?FINAL_TSADI?r   ?cr   r   r   ?is_final?   s   ?zHebrewProber.is_finalc                 C   s   || j | j| j| jfv S r   )?
NORMAL_KAF?
NORMAL_MEM?
NORMAL_NUN?	NORMAL_PEr(   r   r   r   ?is_non_final?   s   
?zHebrewProber.is_non_finalc                 C   s?   | j tjkr	tjS | ?|?}|D ]D}|dkr7| jdkr6| ?| j?r)|  jd7  _qM| ?| j?r6|  j	d7  _	n| jdkrM| ?| j?rM|dkrM|  j	d7  _	| j| _|| _qtj
S )Nr!   r   )?stater   ?NOT_ME?filter_high_byte_onlyr   r*   r   r   r/   r   ?	DETECTING)r   ?byte_strZcurr   r   r   ?feed?   s(   

?

??zHebrewProber.feedc                 C   sx   | j | j }|| jkr| jS || j kr| jS | j?? | j??  }|| jkr)| jS || j k r2| jS |dk r9| jS | jS )Ng        )	r   r   ?MIN_FINAL_CHAR_DISTANCE?LOGICAL_HEBREW_NAME?VISUAL_HEBREW_NAMEr   ?get_confidencer   ?MIN_MODEL_DISTANCE)r   ZfinalsubZmodelsubr   r   r   ?charset_name?   s   
?
zHebrewProber.charset_namec                 C   s   dS )NZHebrewr   r   r   r   r   ?language  s   zHebrewProber.languagec                 C   s(   | j jtjkr| jjtjkrtjS tjS r   )r   r0   r   r1   r   r3   r   r   r   r   r0     s
   ?zHebrewProber.state)?__name__?
__module__?__qualname__r#   r+   r$   r,   r%   r-   r&   r.   r'   ZNORMAL_TSADIr6   r:   r8   r7   r   r   r"   r*   r/   r5   ?propertyr;   r<   r0   ?__classcell__r   r   r   r   r   ?   s6    

;

r   N)?charsetproberr   ?enumsr   r   r   r   r   r   ?<module>   s   c                                                      ? ? ??                                                                    , ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                    - ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                    . ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                    / ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    =?[b?  ?                   @   s?   d dl mZ d dlmZ d dlmZmZ d dlmZm	Z	 d dl
mZ d dlmZmZmZmZmZmZ d dlmZ d dlmZ d d	lmZ G d
d? de?ZdS )?   )?CharSetGroupProber)?HebrewProber)?ISO_8859_5_BULGARIAN_MODEL?WINDOWS_1251_BULGARIAN_MODEL)?ISO_8859_7_GREEK_MODEL?WINDOWS_1253_GREEK_MODEL)?WINDOWS_1255_HEBREW_MODEL)?IBM855_RUSSIAN_MODEL?IBM866_RUSSIAN_MODEL?ISO_8859_5_RUSSIAN_MODEL?KOI8_R_RUSSIAN_MODEL?MACCYRILLIC_RUSSIAN_MODEL?WINDOWS_1251_RUSSIAN_MODEL)?TIS_620_THAI_MODEL)?ISO_8859_9_TURKISH_MODEL)?SingleByteCharSetProberc                       s   e Zd Z? fdd?Z?  ZS )?SBCSGroupProberc                    s?   t t| ???  t? }ttd|?}ttd|?}|?||? tt?tt?tt	?tt
?tt?tt?tt?tt?tt?tt?tt?tt?|||g| _| ??  d S )NFT)?superr   ?__init__r   r   r   Zset_model_probersr   r   r   r   r
   r	   r   r   r   r   r   r   ?probers?reset)?selfZhebrew_proberZlogical_hebrew_proberZvisual_hebrew_prober??	__class__? ?fE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\sbcsgroupprober.pyr   /   s8   ????zSBCSGroupProber.__init__)?__name__?
__module__?__qualname__r   ?__classcell__r   r   r   r   r   .   s    r   N)?charsetgroupproberr   Zhebrewproberr   Zlangbulgarianmodelr   r   Zlanggreekmodelr   r   Zlanghebrewmodelr   Zlangrussianmodelr	   r
   r   r   r   r   Zlangthaimodelr   Zlangturkishmodelr   Zsbcharsetproberr   r   r   r   r   r   ?<module>   s                                                                                                                                                                                                                                                                                                                                                                   ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                     ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                     ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                     ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                     ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                     ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                     ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                     ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??o
    <?[b?  ?                   @   sD   d dl mZ d dlmZ d dlmZ d dlmZ G dd? de?ZdS )?   )?MultiByteCharSetProber)?CodingStateMachine)?EUCTWDistributionAnalysis)?EUCTW_SM_MODELc                       s4   e Zd Z? fdd?Zedd? ?Zedd? ?Z?  ZS )?EUCTWProberc                    s,   t t| ???  tt?| _t? | _| ??  d S )N)	?superr   ?__init__r   r   ?	coding_smr   ?distribution_analyzer?reset??self??	__class__? ?bE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\euctwprober.pyr   "   s   
zEUCTWProber.__init__c                 C   ?   dS )NzEUC-TWr   r   r   r   r   ?charset_name(   ?   zEUCTWProber.charset_namec                 C   r   )NZTaiwanr   r   r   r   r   ?language,   r   zEUCTWProber.language)?__name__?
__module__?__qualname__r   ?propertyr   r   ?__classcell__r   r   r   r   r   !   s    
r   N)	?mbcharsetproberr   ?codingstatemachiner   ?chardistributionr   ?mbcssmr   r   r   r   r   r   ?<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   y ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   z ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   { ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   | ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   } ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   ~ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                    ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                     ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                     ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                      o
    <?[b?  ?                   @   sD   d dl mZ d dlmZ d dlmZ d dlmZ G dd? de?ZdS )?   )?MultiByteCharSetProber)?CodingStateMachine)?Big5DistributionAnalysis)?BIG5_SM_MODELc                       s4   e Zd Z? fdd?Zedd? ?Zedd? ?Z?  ZS )?
Big5Proberc                    s,   t t| ???  tt?| _t? | _| ??  d S )N)	?superr   ?__init__r   r   ?	coding_smr   ?distribution_analyzer?reset??self??	__class__? ?aE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\big5prober.pyr   #   s   
zBig5Prober.__init__c                 C   ?   dS )N?Big5r   r   r   r   r   ?charset_name)   ?   zBig5Prober.charset_namec                 C   r   )N?Chineser   r   r   r   r   ?language-   r   zBig5Prober.language)?__name__?
__module__?__qualname__r   ?propertyr   r   ?__classcell__r   r   r   r   r   "   s    
r   N)	?mbcharsetproberr   ?codingstatemachiner   ?chardistributionr   ?mbcssmr   r   r   r   r   r   ?<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   j ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   k ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   l ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   m ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   n ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   o ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   p ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   q ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   r ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                  o
    <?[b?  ?                   @   sD   d dl mZ d dlmZ d dlmZ d dlmZ G dd? de?ZdS )?   )?EUCKRDistributionAnalysis)?CodingStateMachine)?MultiByteCharSetProber)?CP949_SM_MODELc                       s4   e Zd Z? fdd?Zedd? ?Zedd? ?Z?  ZS )?CP949Proberc                    s,   t t| ???  tt?| _t? | _| ??  d S )N)	?superr   ?__init__r   r   ?	coding_smr   ?distribution_analyzer?reset??self??	__class__? ?bE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\cp949prober.pyr   #   s   
zCP949Prober.__init__c                 C   ?   dS )N?CP949r   r   r   r   r   ?charset_name+   ?   zCP949Prober.charset_namec                 C   r   )N?Koreanr   r   r   r   r   ?language/   r   zCP949Prober.language)?__name__?
__module__?__qualname__r   ?propertyr   r   ?__classcell__r   r   r   r   r   "   s    
r   N)	?chardistributionr   ?codingstatemachiner   ?mbcharsetproberr   ?mbcssmr   r   r   r   r   r   ?<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                                       ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   [ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   \ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   ] ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   ^ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   _ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   ` ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   a ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   b ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   c ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??          o
    <?[b?  ?                   @   sD   d dl mZ d dlmZ d dlmZ d dlmZ G dd? de?ZdS )?   )?MultiByteCharSetProber)?CodingStateMachine)?EUCKRDistributionAnalysis)?EUCKR_SM_MODELc                       s4   e Zd Z? fdd?Zedd? ?Zedd? ?Z?  ZS )?EUCKRProberc                    s,   t t| ???  tt?| _t? | _| ??  d S )N)	?superr   ?__init__r   r   ?	coding_smr   ?distribution_analyzer?reset??self??	__class__? ?bE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\euckrprober.pyr   #   s   
zEUCKRProber.__init__c                 C   ?   dS )NzEUC-KRr   r   r   r   r   ?charset_name)   ?   zEUCKRProber.charset_namec                 C   r   )N?Koreanr   r   r   r   r   ?language-   r   zEUCKRProber.language)?__name__?
__module__?__qualname__r   ?propertyr   r   ?__classcell__r   r   r   r   r   "   s    
r   N)	?mbcharsetproberr   ?codingstatemachiner   ?chardistributionr   ?mbcssmr   r   r   r   r   r   ?<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   L ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   M ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   N ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   O ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   P ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   Q ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   R ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   S ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   T ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??  o
    <?[b?  ?                   @   sD   d dl mZ d dlmZ d dlmZ d dlmZ G dd? de?ZdS )?   )?MultiByteCharSetProber)?CodingStateMachine)?GB2312DistributionAnalysis)?GB2312_SM_MODELc                       s4   e Zd Z? fdd?Zedd? ?Zedd? ?Z?  ZS )?GB2312Proberc                    s,   t t| ???  tt?| _t? | _| ??  d S )N)	?superr   ?__init__r   r   ?	coding_smr   ?distribution_analyzer?reset??self??	__class__? ?cE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\gb2312prober.pyr   "   s   
zGB2312Prober.__init__c                 C   ?   dS )N?GB2312r   r   r   r   r   ?charset_name(   ?   zGB2312Prober.charset_namec                 C   r   )N?Chineser   r   r   r   r   ?language,   r   zGB2312Prober.language)?__name__?
__module__?__qualname__r   ?propertyr   r   ?__classcell__r   r   r   r   r   !   s    
r   N)	?mbcharsetproberr   ?codingstatemachiner   ?chardistributionr   ?mbcssmr   r   r   r   r   r   ?<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   = ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   > ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   @ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   A ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   B ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   C ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   D ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   E ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    <?[b?  ?                   @   s`   d dl mZmZ d dlmZ d dlmZ d dlmZ d dl	m
Z
 d dlmZ G dd? de?Zd	S )
?   )?ProbingState?MachineState)?MultiByteCharSetProber)?CodingStateMachine)?EUCJPDistributionAnalysis)?EUCJPContextAnalysis)?EUCJP_SM_MODELc                       sP   e Zd Z? fdd?Z? fdd?Zedd? ?Zedd? ?Zd	d
? Zdd? Z	?  Z
S )?EUCJPProberc                    s4   t t| ???  tt?| _t? | _t? | _	| ?
?  d S ?N)?superr	   ?__init__r   r   ?	coding_smr   ?distribution_analyzerr   ?context_analyzer?reset??self??	__class__? ?bE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\eucjpprober.pyr   %   s
   
zEUCJPProber.__init__c                    s   t t| ???  | j??  d S r
   )r   r	   r   r   r   r   r   r   r   ,   s   zEUCJPProber.resetc                 C   ?   dS )NzEUC-JPr   r   r   r   r   ?charset_name0   ?   zEUCJPProber.charset_namec                 C   r   )N?Japaneser   r   r   r   r   ?language4   r   zEUCJPProber.languagec                 C   s,  t t|??D ]o}| j?|| ?}|tjkr&| j?d| j| j	|? t
j| _ qv|tjkr1t
j| _ qv|tjkru| j?? }|dkrW|d | jd< | j?| j|? | j?| j|? q| j?||d |d ? |? | j?||d |d ? |? q|d | jd< | jt
jkr?| j?? r?| ?? | jkr?t
j| _| jS )Nz!%s %s prober hit error at byte %s?    r   ?????)?range?lenr   ?
next_stater   ?ERROR?logger?debugr   r   r   ?NOT_ME?_state?ITS_ME?FOUND_IT?START?get_current_charlen?
_last_charr   ?feedr   ?state?	DETECTING?got_enough_data?get_confidence?SHORTCUT_THRESHOLD)r   ?byte_str?i?coding_state?char_lenr   r   r   r+   8   s>   

?


???
?zEUCJPProber.feedc                 C   s   | j ?? }| j?? }t||?S r
   )r   r/   r   ?max)r   ?context_conf?distrib_confr   r   r   r/   Y   s   


zEUCJPProber.get_confidence)?__name__?
__module__?__qualname__r   r   ?propertyr   r   r+   r/   ?__classcell__r   r   r   r   r	   $   s    

!r	   N)?enumsr   r   ?mbcharsetproberr   ?codingstatemachiner   ?chardistributionr   ?jpcntxr   ?mbcssmr   r	   r   r   r   r   ?<module>   s                                                                                                                                                                     1 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   2 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   3 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   4 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   5 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                                   6 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    =?[bU  ?                   @   s0   d dl mZ d dlmZmZ G dd? de?ZdS )?   )?CharSetProber)?ProbingState?MachineStatec                       sV   e Zd ZdZd? fdd?	Z? fdd?Zedd? ?Zed	d
? ?Zdd? Z	dd? Z
?  ZS )?MultiByteCharSetProberz 
    MultiByteCharSetProber
    Nc                    s,   t t| ?j|d? d | _d | _ddg| _d S )N)?lang_filter?    )?superr   ?__init__?distribution_analyzer?	coding_sm?
_last_char)?selfr   ??	__class__? ?fE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\mbcharsetprober.pyr	   '   s   zMultiByteCharSetProber.__init__c                    s<   t t| ???  | jr| j??  | jr| j??  ddg| _d S )Nr   )r   r   ?resetr   r
   r   ?r   r   r   r   r   -   s   

zMultiByteCharSetProber.resetc                 C   ?   t ??N??NotImplementedErrorr   r   r   r   ?charset_name5   ?   z#MultiByteCharSetProber.charset_namec                 C   r   r   r   r   r   r   r   ?language9   r   zMultiByteCharSetProber.languagec                 C   s?   t t|??D ]X}| j?|| ?}|tjkr&| j?d| j| j	|? t
j| _ q_|tjkr1t
j| _ q_|tjkr^| j?? }|dkrO|d | jd< | j?| j|? q| j?||d |d ? |? q|d | jd< | jt
jkr|| j?? r|| ?? | jkr|t
j| _| jS )Nz!%s %s prober hit error at byte %sr   r   ?????)?range?lenr   ?
next_stater   ?ERROR?logger?debugr   r   r   ?NOT_ME?_state?ITS_ME?FOUND_IT?START?get_current_charlenr   r
   ?feed?state?	DETECTING?got_enough_data?get_confidence?SHORTCUT_THRESHOLD)r   ?byte_str?i?coding_state?char_lenr   r   r   r(   =   s6   

?


??
?zMultiByteCharSetProber.feedc                 C   s
   | j ?? S r   )r
   r,   r   r   r   r   r,   Z   s   
z%MultiByteCharSetProber.get_confidencer   )?__name__?
__module__?__qualname__?__doc__r	   r   ?propertyr   r   r(   r,   ?__classcell__r   r   r   r   r   "   s    

r   N)?charsetproberr   ?enumsr   r   r   r   r   r   r   ?<module>   s                                                                                                                                                                                                                                                                                                                              ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                              * ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                              + ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                              , ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                              - ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                              . ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                              / ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    =?[b?  ?                   @   s`   d dl mZ d dlmZ d dlmZ d dlmZ d dlm	Z	 d dl
mZmZ G dd? de?Zd	S )
?   )?MultiByteCharSetProber)?CodingStateMachine)?SJISDistributionAnalysis)?SJISContextAnalysis)?SJIS_SM_MODEL)?ProbingState?MachineStatec                       sP   e Zd Z? fdd?Z? fdd?Zedd? ?Zedd? ?Zd	d
? Zdd? Z	?  Z
S )?
SJISProberc                    s4   t t| ???  tt?| _t? | _t? | _	| ?
?  d S ?N)?superr	   ?__init__r   r   ?	coding_smr   ?distribution_analyzerr   ?context_analyzer?reset??self??	__class__? ?aE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\sjisprober.pyr   %   s
   
zSJISProber.__init__c                    s   t t| ???  | j??  d S r
   )r   r	   r   r   r   r   r   r   r   ,   s   zSJISProber.resetc                 C   s   | j jS r
   )r   ?charset_namer   r   r   r   r   0   s   zSJISProber.charset_namec                 C   s   dS )N?Japaneser   r   r   r   r   ?language4   s   zSJISProber.languagec                 C   s@  t t|??D ]y}| j?|| ?}|tjkr&| j?d| j| j	|? t
j| _ q?|tjkr1t
j| _ q?|tjkr| j?? }|dkr]|d | jd< | j?| jd| d ? |? | j?| j|? q| j?||d | |d | ? |? | j?||d |d ? |? q|d | jd< | jt
jkr?| j?? r?| ?? | jkr?t
j| _| jS )Nz!%s %s prober hit error at byte %s?    r   ?   ?   ?????)?range?lenr   ?
next_stater   ?ERROR?logger?debugr   r   r   ?NOT_ME?_state?ITS_ME?FOUND_IT?START?get_current_charlen?
_last_charr   ?feedr   ?state?	DETECTINGZgot_enough_data?get_confidence?SHORTCUT_THRESHOLD)r   ?byte_str?i?coding_stateZchar_lenr   r   r   r+   8   sF   

?


?????
?zSJISProber.feedc                 C   s   | j ?? }| j?? }t||?S r
   )r   r.   r   ?max)r   Zcontext_confZdistrib_confr   r   r   r.   Y   s   


zSJISProber.get_confidence)?__name__?
__module__?__qualname__r   r   ?propertyr   r   r+   r.   ?__classcell__r   r   r   r   r	   $   s    

!r	   N)Zmbcharsetproberr   ?codingstatemachiner   Zchardistributionr   Zjpcntxr   ?mbcssmr   ?enumsr   r   r	   r   r   r   r   ?<module>   s                                                                                               ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                               ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                               ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                               ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                               ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                               ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                               ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    =?[b?
  ?                   @   sH   d dl mZ d dlmZmZ d dlmZ d dlmZ G dd? de?Z	dS )?   )?CharSetProber)?ProbingState?MachineState)?CodingStateMachine)?UTF8_SM_MODELc                       sT   e Zd ZdZ? fdd?Z? fdd?Zedd? ?Zedd	? ?Zd
d? Z	dd? Z
?  ZS )?
UTF8Proberg      ??c                    s*   t t| ???  tt?| _d | _| ??  d S )N)?superr   ?__init__r   r   ?	coding_sm?_num_mb_chars?reset??self??	__class__? ?aE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\utf8prober.pyr	   &   s   
zUTF8Prober.__init__c                    s"   t t| ???  | j??  d| _d S )N?    )r   r   r   r
   r   r   r   r   r   r   ,   s   

zUTF8Prober.resetc                 C   ?   dS )Nzutf-8r   r   r   r   r   ?charset_name1   ?   zUTF8Prober.charset_namec                 C   r   )N? r   r   r   r   r   ?language5   r   zUTF8Prober.languagec                 C   s?   |D ]1}| j ?|?}|tjkrtj| _ q4|tjkr tj| _ q4|tj	kr3| j ?
? dkr3|  jd7  _q| jtjkrE| ?? | jkrEtj| _| jS )N?   r   )r
   ?
next_stater   ?ERRORr   ?NOT_ME?_state?ITS_ME?FOUND_IT?START?get_current_charlenr   ?state?	DETECTING?get_confidence?SHORTCUT_THRESHOLD)r   ?byte_str?c?coding_stater   r   r   ?feed9   s    


?zUTF8Prober.feedc                 C   s*   d}| j dk r|| j| j  9 }d| S |S )Ng?G?z????   g      ??)r   ?ONE_CHAR_PROB)r   Zunliker   r   r   r$   L   s
   
zUTF8Prober.get_confidence)?__name__?
__module__?__qualname__r+   r	   r   ?propertyr   r   r)   r$   ?__classcell__r   r   r   r   r   #   s    

r   N)
?charsetproberr   ?enumsr   r   ?codingstatemachiner   Zmbcssmr   r   r   r   r   r   ?<module>   s
                                                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             4 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             5 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             6 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             7 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             8 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             9 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             : ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             ; ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??        o
    =?[b?  ?                   @   s?   d dl mZ d dlmZ d dlmZ d dlmZ d dlm	Z	 d dl
mZ d dlmZ d dlmZ d d	lmZ G d
d? de?ZdS )?   )?CharSetGroupProber)?
UTF8Prober)?
SJISProber)?EUCJPProber)?GB2312Prober)?EUCKRProber)?CP949Prober)?
Big5Prober)?EUCTWProberc                       s   e Zd Zd? fdd?	Z?  ZS )?MBCSGroupProberNc                    sD   t t| ?j|d? t? t? t? t? t? t? t	? t
? g| _| ??  d S )N)?lang_filter)?superr   ?__init__r   r   r   r   r   r   r	   r
   ?probers?reset)?selfr   ??	__class__? ?fE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\mbcsgroupprober.pyr   *   s   ?
zMBCSGroupProber.__init__)N)?__name__?
__module__?__qualname__r   ?__classcell__r   r   r   r   r   )   s    r   N)?charsetgroupproberr   Z
utf8proberr   Z
sjisproberr   Zeucjpproberr   Zgb2312proberr   Zeuckrproberr   Zcp949proberr   Z
big5proberr	   Zeuctwproberr
   r   r   r   r   r   ?<module>   s                                                                                                                                                                                                                                                                                                                                                                                                                                                           ! ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             " ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             # ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             $ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             % ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             & ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             ' ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             ( ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             ) ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             * ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             + ? ? ? ? ? ?o
    <?[b  ?                   @   s(   d dl Z ddlmZ G dd? de?ZdS )?    N?   )?MachineStatec                   @   sD   e Zd ZdZdd? Zdd? Zdd? Zdd	? Zd
d? Ze	dd? ?Z
dS )?CodingStateMachinea?  
    A state machine to verify a byte sequence for a particular encoding. For
    each byte the detector receives, it will feed that byte to every active
    state machine available, one byte at a time. The state machine changes its
    state based on its previous state and the byte it receives. There are 3
    states in a state machine that are of interest to an auto-detector:

    START state: This is the state to start with, or a legal byte sequence
                 (i.e. a valid code point) for character has been identified.

    ME state:  This indicates that the state machine identified a byte sequence
               that is specific to the charset it is designed for and that
               there is no other possible encoding which can contain this byte
               sequence. This will to lead to an immediate positive answer for
               the detector.

    ERROR state: This indicates the state machine identified an illegal byte
                 sequence for that encoding. This will lead to an immediate
                 negative answer for this encoding. Detector will exclude this
                 encoding from consideration from here on.
    c                 C   s0   || _ d| _d| _d | _t?t?| _| ??  d S )Nr   )	?_model?_curr_byte_pos?_curr_char_len?_curr_state?logging?	getLogger?__name__?logger?reset)?selfZsm? r   ?iE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\codingstatemachine.py?__init__7   s   zCodingStateMachine.__init__c                 C   s   t j| _d S ?N)r   ?STARTr   ?r   r   r   r   r   ?   s   zCodingStateMachine.resetc                 C   sh   | j d | }| jtjkrd| _| j d | | _| j| j d  | }| j d | | _|  jd7  _| jS )NZclass_tabler   Zchar_len_tableZclass_factorZstate_tabler   )r   r   r   r   r   r   )r   ?cZ
byte_classZ
curr_stater   r   r   ?
next_stateB   s   ?zCodingStateMachine.next_statec                 C   s   | j S r   )r   r   r   r   r   ?get_current_charlenP   s   z&CodingStateMachine.get_current_charlenc                 C   ?
   | j d S )N?name?r   r   r   r   r   ?get_coding_state_machineS   s   
z+CodingStateMachine.get_coding_state_machinec                 C   r   )N?languager   r   r   r   r   r   V   s   
zCodingStateMachine.languageN)r   ?
__module__?__qualname__?__doc__r   r   r   r   r   ?propertyr   r   r   r   r   r   !   s    r   )r	   ?enumsr   ?objectr   r   r   r   r   ?<module>   s                                                                                                                                                                                                     B ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                            C ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                            D ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                            E ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                            F ? ? ?o
    <?[bn  ?                   @   sX   d dl mZ d dlmZ d dlmZmZmZ d dlm	Z	m
Z
mZmZ G dd? de?ZdS )?   )?CharSetProber)?CodingStateMachine)?LanguageFilter?ProbingState?MachineState)?HZ_SM_MODEL?ISO2022CN_SM_MODEL?ISO2022JP_SM_MODEL?ISO2022KR_SM_MODELc                       sV   e Zd ZdZd? fdd?	Z? fdd?Zedd? ?Zed	d
? ?Zdd? Z	dd? Z
?  ZS )?EscCharSetProberz?
    This CharSetProber uses a "code scheme" approach for detecting encodings,
    whereby easily recognizable escape or shift sequences are relied on to
    identify these encodings.
    Nc                    s?   t t| ?j|d? g | _| jtj@ r"| j?tt	?? | j?tt
?? | jtj@ r0| j?tt?? | jtj@ r>| j?tt?? d | _d | _d | _d | _| ??  d S )N)?lang_filter)?superr   ?__init__?	coding_smr   r   ?CHINESE_SIMPLIFIED?appendr   r   r   ?JAPANESEr	   ?KOREANr
   ?active_sm_count?_detected_charset?_detected_language?_state?reset)?selfr   ??	__class__? ?`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\escprober.pyr   *   s   zEscCharSetProber.__init__c                    sJ   t t| ???  | jD ]}|sq
d|_|??  q
t| j?| _d | _d | _d S )NT)	r   r   r   r   ?active?lenr   r   r   )r   r   r   r   r   r   :   s   


zEscCharSetProber.resetc                 C   ?   | j S ?N?r   ?r   r   r   r   ?charset_nameE   ?   zEscCharSetProber.charset_namec                 C   r    r!   )r   r#   r   r   r   ?languageI   r%   zEscCharSetProber.languagec                 C   s   | j rdS dS )Ng?G?z???g        r"   r#   r   r   r   ?get_confidenceM   s   zEscCharSetProber.get_confidencec                 C   s?   |D ]L}| j D ]F}|r|jsq|?|?}|tjkr4d|_|  jd8  _| jdkr3tj| _| j	    S q|tj
krMtj| _|?? | _|j| _| j	    S qq| j	S )NFr   ?    )r   r   Z
next_stater   ?ERRORr   r   ?NOT_MEr   ?state?ITS_ME?FOUND_ITZget_coding_state_machiner   r&   r   )r   ?byte_str?cr   Zcoding_stater   r   r   ?feedS   s(   




?

??zEscCharSetProber.feedr!   )?__name__?
__module__?__qualname__?__doc__r   r   ?propertyr$   r&   r'   r0   ?__classcell__r   r   r   r   r   #   s    

r   N)?charsetproberr   Zcodingstatemachiner   ?enumsr   r   r   Zescsmr   r   r	   r
   r   r   r   r   r   ?<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                            2 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                            3 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                            4 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                            5 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    <?[b?  ?                   @   s0   d dl Z d dlZddlmZ G dd? de?ZdS )?    N?   )?ProbingStatec                   @   sn   e Zd ZdZddd?Zdd? Zedd? ?Zd	d
? Zedd? ?Z	dd? Z
edd? ?Zedd? ?Zedd? ?ZdS )?CharSetProbergffffff??Nc                 C   s   d | _ || _t?t?| _d S ?N)?_state?lang_filter?logging?	getLogger?__name__?logger)?selfr   ? r   ?dE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\charsetprober.py?__init__'   s   zCharSetProber.__init__c                 C   s   t j| _d S r   )r   ?	DETECTINGr   ?r   r   r   r   ?reset,   s   zCharSetProber.resetc                 C   ?   d S r   r   r   r   r   r   ?charset_name/   s   zCharSetProber.charset_namec                 C   r   r   r   )r   ?bufr   r   r   ?feed3   ?   zCharSetProber.feedc                 C   s   | j S r   )r   r   r   r   r   ?state6   s   zCharSetProber.statec                 C   s   dS )Ng        r   r   r   r   r   ?get_confidence:   r   zCharSetProber.get_confidencec                 C   s   t ?dd| ?} | S )Ns   ([ -])+?    )?re?sub)r   r   r   r   ?filter_high_byte_only=   s   z#CharSetProber.filter_high_byte_onlyc                 C   s\   t ? }t?d| ?}|D ] }|?|dd? ? |dd? }|?? s&|dk r&d}|?|? q|S )u9  
        We define three types of bytes:
        alphabet: english alphabets [a-zA-Z]
        international: international characters [-ÿ]
        marker: everything else [^a-zA-Z-ÿ]

        The input buffer can be thought to contain a series of words delimited
        by markers. This function works to filter all words that contain at
        least one international character. All contiguous sequences of markers
        are replaced by a single space ascii character.

        This filter applies to all scripts which do not use English characters.
        s%   [a-zA-Z]*[?-?]+[a-zA-Z]*[^a-zA-Z?-?]?N??????   ?r   )?	bytearrayr   ?findall?extend?isalpha)r   ?filtered?words?wordZ	last_charr   r   r   ?filter_international_wordsB   s   ?z(CharSetProber.filter_international_wordsc                 C   s?   t ? }d}d}tt| ??D ]7}| ||d ? }|dkrd}n|dkr$d}|dk rD|?? sD||kr@|s@|?| ||? ? |?d? |d }q|sP|?| |d	? ? |S )
a?  
        Returns a copy of ``buf`` that retains only the sequences of English
        alphabet and high byte characters that are not between <> characters.
        Also retains English alphabet and high byte characters immediately
        before occurrences of >.

        This filter can be applied to all scripts which contain both English
        characters and extended ASCII characters, but is currently only used by
        ``Latin1Prober``.
        Fr   r   ?   >?   <Tr   r   N)r    ?range?lenr#   r"   )r   r$   Zin_tag?prev?currZbuf_charr   r   r   ?filter_with_english_lettersg   s$   
?z)CharSetProber.filter_with_english_lettersr   )r
   ?
__module__?__qualname__ZSHORTCUT_THRESHOLDr   r   ?propertyr   r   r   r   ?staticmethodr   r'   r.   r   r   r   r   r   #   s     




$r   )r   r   ?enumsr   ?objectr   r   r   r   r   ?<module>   s                                                                                                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                            # ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                            $ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    <?[b}  ?                   @   sh   d Z G dd? de?ZG dd? de?ZG dd? de?ZG dd? de?ZG d	d
? d
e?ZG dd? de?ZdS )zr
All of the Enums that are used throughout the chardet package.

:author: Dan Blanchard (dan.blanchard@gmail.com)
c                   @   ?   e Zd ZdZdZdZdZdS )?
InputStatezS
    This enum represents the different states a universal detector can be in.
    ?    ?   ?   N)?__name__?
__module__?__qualname__?__doc__?
PURE_ASCII?	ESC_ASCII?	HIGH_BYTE? r   r   ?\E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\enums.pyr      ?
    r   c                   @   s<   e Zd ZdZdZdZdZdZdZdZ	eeB Z
e
eB eB ZdS )	?LanguageFilterzj
    This enum represents the different language filters we can apply to a
    ``UniversalDetector``.
    r   r   ?   ?   ?   ?   N)r   r   r   r	   ZCHINESE_SIMPLIFIEDZCHINESE_TRADITIONALZJAPANESEZKOREAN?NON_CJK?ALLZCHINESEZCJKr   r   r   r   r      s    r   c                   @   r   )?ProbingStatezG
    This enum represents the different states a prober can be in.
    r   r   r   N)r   r   r   r	   Z	DETECTING?FOUND_IT?NOT_MEr   r   r   r   r       r   r   c                   @   r   )?MachineStatezN
    This enum represents the different states a state machine can be in.
    r   r   r   N)r   r   r   r	   ZSTART?ERRORZITS_MEr   r   r   r   r   )   r   r   c                   @   s,   e Zd ZdZdZdZdZdZedd? ?Z	dS )	?SequenceLikelihoodzX
    This enum represents the likelihood of a character following the previous one.
    r   r   r   ?   c                 C   s   dS )z::returns: The number of likelihood categories in the enum.r   r   )?clsr   r   r   ?get_num_categories;   s   z%SequenceLikelihood.get_num_categoriesN)
r   r   r   r	   ZNEGATIVEZUNLIKELYZLIKELYZPOSITIVE?classmethodr   r   r   r   r   r   2   s    r   c                   @   s$   e Zd ZdZdZdZdZdZdZdS )?CharacterCategoryz?
    This enum represents the different categories language models for
    ``SingleByteCharsetProber`` put characters into.

    Anything less than CONTROL is considered a letter.
    ??   ??   ??   ??   ??   N)	r   r   r   r	   Z	UNDEFINEDZ
LINE_BREAKZSYMBOLZDIGITZCONTROLr   r   r   r   r!   A   s    r!   N)r	   ?objectr   r   r   r   r   r!   r   r   r   r   ?<module>   s    			                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ~ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                              o
    <?[b?  ?                   @   s,   d dl mZ d dlmZ G dd? de?ZdS )?   )?ProbingState)?CharSetProberc                       sR   e Zd Zd? fdd?	Z? fdd?Zedd? ?Zedd	? ?Zd
d? Zdd? Z	?  Z
S )?CharSetGroupProberNc                    s(   t t| ?j|d? d| _g | _d | _d S )N)?lang_filter?    )?superr   ?__init__?_active_num?probers?_best_guess_prober)?selfr   ??	__class__? ?iE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\charsetgroupprober.pyr   !   s   
zCharSetGroupProber.__init__c                    sJ   t t| ???  d| _| jD ]}|r|??  d|_|  jd7  _qd | _d S )Nr   Tr   )r   r   ?resetr	   r
   ?activer   )r   ?proberr   r   r   r   '   s   
?
zCharSetGroupProber.resetc                 C   ?    | j s| ??  | j sd S | j jS ?N)r   ?get_confidence?charset_name?r   r   r   r   r   1   ?
   zCharSetGroupProber.charset_namec                 C   r   r   )r   r   ?languager   r   r   r   r   9   r   zCharSetGroupProber.languagec                 C   s?   | j D ]?}|sq|jsq|?|?}|sq|tjkr%|| _tj| _| j  S |tjkrBd|_|  j	d8  _	| j	dkrBtj| _| j  S q| jS )NFr   r   )
r
   r   ?feedr   ?FOUND_ITr   ?_state?state?NOT_MEr	   )r   ?byte_strr   r   r   r   r   r   A   s(   






?zCharSetGroupProber.feedc                 C   s?   | j }|tjkr
dS |tjkrdS d}d | _| jD ])}|sq|js*| j?d|j	? q|?
? }| j?d|j	|j|? ||k rB|}|| _q| jsHdS |S )Ng?G?z???g{?G?z??g        z%s not activez%s %s confidence = %s)r   r   r   r   r   r
   r   ?logger?debugr   r   r   )r   r   Z	best_confr   Zconfr   r   r   r   V   s,   


?z!CharSetGroupProber.get_confidencer   )?__name__?
__module__?__qualname__r   r   ?propertyr   r   r   r   ?__classcell__r   r   r   r   r       s    


r   N)?enumsr   Zcharsetproberr   r   r   r   r   r   ?<module>   s                                                                                                                                                                                                                                                                                                                                                   ? ? ? ? ??                                                           k ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           l ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           m ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           n ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           o ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           p ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          o
    =?[b?  ?                   @   sD   d dl mZ d dlmZ d dlmZmZ g d?Zdd? Zdd? Z	d	S )
?   )?UniversalDetector)?
InputState)?__version__?VERSION)r   ?detect?
detect_allr   r   c                 C   sF   t | t?st | t?std?t| ????t| ?} t? }|?| ? |?? S )z?
    Detect the encoding of the given byte string.

    :param byte_str:     The byte sequence to examine.
    :type byte_str:      ``bytes`` or ``bytearray``
    ?3Expected object of type bytes or bytearray, got: {})	?
isinstance?	bytearray?bytes?	TypeError?format?typer   ?feed?close)?byte_str?detector? r   ?_E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\__init__.pyr      s   


?
r   c                 C   s?   t | t?st | t?std?t| ????t| ?} t? }|?| ? |??  |j	t
jkrig }|jD ],}|?? |jkrZ|j}|j?? }|?d?rN|jrN|j?||?}|?||?? |jd?? q.t|?dkrit|dd? d?S |jgS )z?
    Detect all the possible encodings of the given byte string.

    :param byte_str:     The byte sequence to examine.
    :type byte_str:      ``bytes`` or ``bytearray``
    r   ziso-8859)?encoding?
confidence?language?    c                 S   s
   | d  S )Nr   r   )?resultr   r   r   ?<lambda>Q   s   
 zdetect_all.<locals>.<lambda>)?key)r	   r
   r   r   r   r   r   r   r   Z_input_stater   Z	HIGH_BYTEZ_charset_probersZget_confidenceZMINIMUM_THRESHOLD?charset_name?lower?
startswithZ_has_win_bytesZISO_WIN_MAP?get?appendr   ?len?sortedr   )r   r   ?resultsZproberr   Zlower_charset_namer   r   r   r   -   s:   


?



???r   N)
Zuniversaldetectorr   Zenumsr   ?versionr   r   ?__all__r   r   r   r   r   r   ?<module>   s                                                                                                                                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           6 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           7 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           8 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           9 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           : ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           ; ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           < ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           = ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                  o
    ??[bB  ?                   @   s?  d Z ddlmZ ddlZejZed dkZed dkZddlZer|ddl	m
Z
mZmZmZmZmZmZmZmZ ddlmZmZmZmZmZ ddlmZ ddlZdd	lmZ dd
lmZ ddlmZm Z m!Z!m"Z" e#Z$e#Z%e&Z#e'Z'e(e)e*fZ+e(e)fZ,e-Z.dS er?ddl/mZmZmZmZmZm
Z
mZmZmZmZ ddl0mZmZmZmZmZ ddl1m2Z dd	l3mZ dd
l4mZ ddlm"Z" ddl5mZm Z m!Z! ddlm.Z. e#Z$e#Z#e%Z%e#e%fZ'e(e*fZ+e(fZ,dS dS )zq
requests.compat
~~~~~~~~~~~~~~~

This module handles import compatibility issues between Python 2 and
Python 3.
?    )?chardetN?   ?   )	?quote?unquote?
quote_plus?unquote_plus?	urlencode?
getproxies?proxy_bypass?proxy_bypass_environment?getproxies_environment)?urlparse?
urlunparse?urljoin?urlsplit?	urldefrag)?parse_http_list)?Morsel)?StringIO)?Callable?Mapping?MutableMapping?OrderedDict)
r   r   r   r   r	   r   r   r   r   r   )r   r
   r   r   r   )?	cookiejar)r   )r   r   r   )?JSONDecodeError)6?__doc__?pip._vendorr   ?sys?version_infoZ_verZis_py2Zis_py3Zjson?urllibr   r   r   r   r	   r
   r   r   r   r   r   r   r   r   Zurllib2r   Z	cookielibZCookier   r   ?collectionsr   r   r   r   ?strZbuiltin_str?bytes?unicodeZ
basestring?int?long?floatZnumeric_types?integer_types?
ValueErrorr   ?urllib.parseZurllib.request?httpr   Zhttp.cookies?io?collections.abc? r.   r.   ?^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\requests\compat.py?<module>   sL   	,
0
?                                                                                                                                                                                                                                                                                                                                                                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           % ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           & ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           ' ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           ( ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           ) ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           * ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           + ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                           , ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??          o
    A?[b?  ?                   @   sD   d dl Z ddlmZ ddlmZ ejrd dlZG dd? dej?ZdS )?    N?   )?six??queuec                   @   s0   e Zd Zdd? Zefdd?Zdd? Zdd? Zd	S )
?	LifoQueuec                 C   s   t ?? | _d S ?N)?collections?dequer   )?self?_? r   ?aE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\queue.py?_init   s   zLifoQueue._initc                 C   s
   || j ?S r   r   )r
   ?lenr   r   r   ?_qsize   ?   
zLifoQueue._qsizec                 C   s   | j ?|? d S r   )r   ?append)r
   ?itemr   r   r   ?_put   s   zLifoQueue._putc                 C   s
   | j ?? S r   )r   ?pop)r
   r   r   r   ?_get   r   zLifoQueue._getN)?__name__?
__module__?__qualname__r   r   r   r   r   r   r   r   r   r      s
    r   )	r   ?packagesr   ?packages.six.movesr   ?PY2?QueueZ_unused_module_Queuer   r   r   r   r   ?<module>   s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ( ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                          ) ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                          * ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                          + ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                          , ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                          - ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                          . ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                          / ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                          0 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                          1 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                          2 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        o
    @?[b?	  ?                   @   s?   d dl mZ d dlZd dlZd dlZd dlmZ ddlmZ ddl	m
Z
 ddlmZ e?d?d	 Zd
d? Zdd? Zdd? Zddd?ZdS )?    )?absolute_importN)?BytesIO?   )?RequestField)?six)?bzutf-8?   c                  C   s$   t ?t?d??} tjs| ?d?} | S )zN
    Our embarrassingly-simple replacement for mimetools.choose_boundary.
    ?   ?ascii)?binascii?hexlify?os?urandomr   ?PY2?decode)?boundary? r   ?_E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\filepost.py?choose_boundary   s   
r   c                 c   sL   ? t | t?rt?| ?}nt| ?}|D ]}t |t?r|V  qtj|? V  qdS )z?
    Iterate over fields.

    Supports list of (k, v) tuples and dicts, and lists of
    :class:`~urllib3.fields.RequestField`.

    N)?
isinstance?dictr   ?	iteritems?iterr   Zfrom_tuples)?fields?i?fieldr   r   r   ?iter_field_objects   s   ?

?r   c                 C   s,   t | t?rdd? t?| ?D ?S dd? | D ?S )a-  
    .. deprecated:: 1.6

    Iterate over fields.

    The addition of :class:`~urllib3.fields.RequestField` makes this function
    obsolete. Instead, use :func:`iter_field_objects`, which returns
    :class:`~urllib3.fields.RequestField` objects.

    Supports list of (k, v) tuples and dicts.
    c                 s   ?   ? | ]	\}}||fV  qd S ?Nr   ??.0?k?vr   r   r   ?	<genexpr>:   ?   ? ziter_fields.<locals>.<genexpr>c                 s   r   r   r   r   r   r   r   r#   <   r$   )r   r   r   r   )r   r   r   r   ?iter_fields-   s   
r%   c                 C   s?   t ? }|du r
t? }t| ?D ]8}|?td| ?? t|??|?? ? |j}t|t	?r.t
|?}t|tj?r<t|??|? n|?|? |?d? q|?td| ?? t
d| ?}|?? |fS )aQ  
    Encode a dictionary of ``fields`` using the multipart/form-data MIME format.

    :param fields:
        Dictionary of fields or list of (key, :class:`~urllib3.fields.RequestField`).

    :param boundary:
        If not specified, then a random boundary will be generated using
        :func:`urllib3.filepost.choose_boundary`.
    Nz--%s
s   
z--%s--
z multipart/form-data; boundary=%s)r   r   r   ?writer   ?writerZrender_headers?datar   ?int?strr   ?	text_type?getvalue)r   r   ?bodyr   r(   ?content_typer   r   r   ?encode_multipart_formdata?   s    

r/   r   )?
__future__r   r   ?codecsr   ?ior   r   r   ?packagesr   Zpackages.sixr   ?lookupr'   r   r   r%   r/   r   r   r   r   ?<module>   s    
                                                                                                                                                                                                                                                                                                                                      ? ? ? ? ? ? ? ? ? ? ??                                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                    o
    A?[bw  ?                   @   sr   d Z ddlZddlZzddlZW n ey   dZY nw dZG dd? de?Zddd?Zd	d
? Z	dd? Z
dd? ZdS )zJThe match_hostname() function from Python 3.3.3, essential when using SSL.?    Nz3.5.0.1c                   @   s   e Zd ZdS )?CertificateErrorN)?__name__?
__module__?__qualname__? r   r   ?nE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\ssl_match_hostname.pyr      s    r   ?   c           
      C   s?   g }| sdS | ? d?}|d }|dd? }|?d?}||kr&tdt| ? ??|s0| ?? |?? kS |dkr:|?d? n|?d	?sD|?d	?rM|?t?|?? n|?t?|??	d
d?? |D ]
}|?t?|?? q[t?
dd?|? d tj?}	|	?|?S )zhMatching according to RFC 6125, section 6.4.3

    http://tools.ietf.org/html/rfc6125#section-6.4.3
    F?.r   r   N?*z,too many wildcards in certificate DNS name: z[^.]+zxn--z\*z[^.]*z\Az\.z\Z)?split?countr   ?repr?lower?append?
startswith?re?escape?replace?compile?join?
IGNORECASE?match)
?dn?hostnameZmax_wildcardsZpats?partsZleftmost?	remainder?	wildcards?frag?patr   r   r   ?_dnsname_match   s,   


?
r   c                 C   s&   t | t?rtjdk rt| ddd?} | S )N)?   ?ascii?strict)?encoding?errors)?
isinstance?str?sys?version_infoZunicode)?objr   r   r   ?_to_unicodeO   s   r*   c                 C   s   t ?t| ??? ?}||kS )z?Exact matching of IP addresses.

    RFC 6125 explicitly doesn't define an algorithm for this
    (section 1.7.2 - "Out of Scope").
    )?	ipaddress?
ip_addressr*   ?rstrip)?ipname?host_ip?ipr   r   r   ?_ipaddress_matchV   s   r1   c                 C   sv  | st d??z	t?t|??}W n% t y   d}Y n ty$   d}Y n ty4   tdu r1d}n? Y nw g }| ?dd?}|D ]/\}}|dkrY|du rSt||?rS dS |?|? q?|dkrn|durit	||?ri dS |?|? q?|s?| ?dd?D ]}|D ]\}}|dkr?t||?r?  dS |?|? q{qwt
|?d	kr?td
|d?tt|??f ??t
|?d	kr?td||d f ??td??)a)  Verify that *cert* (in decoded format as returned by
    SSLSocket.getpeercert()) matches the *hostname*.  RFC 2818 and RFC 6125
    rules are followed, but IP addresses are not accepted for *hostname*.

    CertificateError is raised on failure. On success, the function
    returns nothing.
    ztempty or no certificate, match_hostname needs a SSL socket or SSL context with either CERT_OPTIONAL or CERT_REQUIREDN?subjectAltNamer   ?DNSz
IP Address?subject?
commonNamer   z&hostname %r doesn't match either of %sz, zhostname %r doesn't match %rr   z=no appropriate commonName or subjectAltName fields were found)?
ValueErrorr+   r,   r*   ?UnicodeError?AttributeError?getr   r   r1   ?lenr   r   ?mapr   )?certr   r/   ?dnsnames?san?key?value?subr   r   r   ?match_hostnameb   s`   ???
?

?????rB   )r   )?__doc__r   r'   r+   ?ImportError?__version__r6   r   r   r*   r1   rB   r   r   r   r   ?<module>   s    ?
6                                                                                                                                                                                                                                                                                                                   ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                        \ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                        ] ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    A?[bE  ?                   @   s0   d dl mZmZmZ 	ddd?Z	ddd?ZdS )?   )?create_urllib3_context?resolve_cert_reqs?resolve_ssl_versionNc                 C   s4   | du rdS |dkrdS | j dkr|r|jrdS dS )a?  
    Returns True if the connection requires an HTTP CONNECT through the proxy.

    :param URL proxy_url:
        URL of the proxy.
    :param ProxyConfig proxy_config:
        Proxy configuration from poolmanager.py
    :param str destination_scheme:
        The scheme of the destination. (i.e https, http, etc)
    NF?http?httpsT)?schemeZuse_forwarding_for_https)Z	proxy_url?proxy_config?destination_scheme? r
   ?aE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\proxy.py?connection_requires_http_tunnel   s   ???r   c                 C   s6   t t| ?t|?d?}|s|s|st|d?r|??  |S )z\
    Generates a default proxy ssl context if one hasn't been provided by the
    user.
    )?ssl_version?	cert_reqs?load_default_certs)r   r   r   ?hasattrr   )r   r   ?ca_certs?ca_cert_dir?ca_cert_data?ssl_contextr
   r
   r   ?create_proxy_ssl_context%   s   ?????r   )NNN)?ssl_r   r   r   r   r   r
   r
   r
   r   ?<module>   s
    
?"?                                                                                                                                                                                                    ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                         ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    A?[b?  ?                   @   sP   d dl mZ d dlmZmZ ddlmZ ddlmZ	 dd? Z
dd	? Zd
d? ZdS )?    )?absolute_import)?!MultipartInvariantViolationDefect?StartBoundaryNotFoundDefect?   )?HeaderParsingError)?http_clientc                 C   s`   z| ? ? W S  ty   Y nw z| jW S  ty   Y nw z| jdu W S  ty/   Y td??w )zt
    Checks whether a given file-like object is closed.

    :param obj:
        The file-like object to check.
    Nz)Unable to determine whether fp is closed.)?isclosed?AttributeError?closed?fp?
ValueError)?obj? r   ?dE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\response.py?is_fp_closed	   s    
???r   c                 C   s?   t | tj?std?t| ????t| dd?}t| dd?}d}|r/| ?? s/|? }t |tt	f?r/|}|r8dd? |D ?}|s<|rBt
||d??dS )a>  
    Asserts whether all headers have been successfully parsed.
    Extracts encountered errors from the result of parsing headers.

    Only works on Python 3.

    :param http.client.HTTPMessage headers: Headers to verify.

    :raises urllib3.exceptions.HeaderParsingError:
        If parsing errors are found.
    z"expected httplib.Message, got {0}.?defectsN?get_payloadc                 S   s   g | ]}t |ttf?s|?qS r   )?
isinstancer   r   )?.0?defectr   r   r   ?
<listcomp>R   s    ???z)assert_header_parsing.<locals>.<listcomp>)r   ?unparsed_data)r   ?httplib?HTTPMessage?	TypeError?format?type?getattr?is_multipart?bytes?strr   )?headersr   r   r   ?payloadr   r   r   ?assert_header_parsing(   s"   ??r#   c                 C   s$   | j }t|t?r|dkS |?? dkS )z?
    Checks whether the request of a response has been a HEAD-request.
    Handles the quirks of AppEngine.

    :param http.client.HTTPResponse response:
        Response to check if the originating request
        used 'HEAD' as a method.
    ?   ?HEAD)?_methodr   ?int?upper)?response?methodr   r   r   ?is_response_to_head^   s   

r+   N)?
__future__r   Zemail.errorsr   r   ?
exceptionsr   ?packages.six.movesr   r   r   r#   r+   r   r   r   r   ?<module>   s    6                                                                                                                                                                                                               ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                     e ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                     f ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                     g ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                     h ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                     i ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                     j ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                     k ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?INDX( 	 ?8^           (   ?  ?       ??                  D
    ? v     D
    ?u??LR??u??LR??u??LR??u??LR?       j               c o n n e c t i o n . c p y t h o n - 3 1 0 . p y c 4 'D
    ? l     D
    (??LR?(??LR?(??LR?(??LR?       =               p r o x y . c p y t h o n - 3 1 0 . p y c y c .D
    ? l     D
    ???LR????LR????LR????LR?       %               q u e u e . c p y t h o n - 3 1 0 . p y c y c  D
    ? p     D
    ????LR?????LR?????LR?????LR        ?               r e q u e s t . c p y t h o n - 3 1 0 . p y c !D
    ? r     D
    ????LR?????LR?????LR?????LR?       2	               r e s p o n s e . c p y t h o n - 3 1 0 . p y c 
    "D
    ? l     D
    A<??LR?A<??LR?A<??LR?A<??LR? @      ?               r e t r y . c p y t h o n - 3 1 0 . p y c p y %D
    ? z     D
    
???LR?
???LR?
???LR?
???LR?        ?               s s l t r a n s p o r t . c p y t h o n - 3 1 0 . p y c h     #D
    ? j     D
    ????LR ????LR?????LR?????LR? 0      ,,               s s l _ . c p y t h o n - 3 1 0 . p y c . p y )D
    ? ?     D
    R???LR?R???LR?R???LR?R???LR?       ?              " s s l _ m a t c h _ h o s t n a m e . c p y t h o n - 3 1 0 . p y c  &D
    ? p     D
    (??LR?(??LR?(??LR?(??LR? 0      ?"               t i m e o u t . c p y t h o n - 3 1 0 . p y c $D
    x h     D
    [c??LR?[c??LR?[c??LR?[c??LR? 0      ?)               u r l . c p y t h o n - 3 1 0 . p y c D
    ? j    D
    ?u??LR??u??LR??u??LR??u??LR?                      w a i t . c p y t h o n - 3 1 0 . p y c . p y D
    ? r     D
    -??LR?-??LR?-??LR?-??LR?       R               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4               c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          o
    A?[b  ?                   @   s?   d dl mZ d dlmZ ddlmZ ddlmZmZ dZ	e
g d??ZdZzd d	lZW n	 ey3   Y nw ed
7 Ze? Z												ddd?Zdd? Zdd? Zd	S )?    )?absolute_import)?	b64encode?   )?UnrewindableBodyError)?b?integer_typesz@@@SKIP_HEADER@@@)?accept-encoding?host?
user-agentzgzip,deflateNz,brc                 C   s?   i }|rt |t?r
nt |t?rd?|?}nt}||d< |r!||d< | r'd|d< |r6dtt|???d? |d< |rEdtt|???d? |d	< |rKd
|d< |S )a  
    Shortcuts for generating request headers.

    :param keep_alive:
        If ``True``, adds 'connection: keep-alive' header.

    :param accept_encoding:
        Can be a boolean, list, or string.
        ``True`` translates to 'gzip,deflate'.
        List will get joined by comma.
        String will be used as provided.

    :param user_agent:
        String representing the user-agent you want, such as
        "python-urllib3/0.6"

    :param basic_auth:
        Colon-separated username:password string for 'authorization: basic ...'
        auth header.

    :param proxy_basic_auth:
        Colon-separated username:password string for 'proxy-authorization: basic ...'
        auth header.

    :param disable_cache:
        If ``True``, adds 'cache-control: no-cache' header.

    Example::

        >>> make_headers(keep_alive=True, user_agent="Batman/1.0")
        {'connection': 'keep-alive', 'user-agent': 'Batman/1.0'}
        >>> make_headers(accept_encoding=True)
        {'accept-encoding': 'gzip,deflate'}
    ?,r   r
   z
keep-alive?
connectionzBasic zutf-8Zauthorizationzproxy-authorizationzno-cachezcache-control)?
isinstance?str?list?join?ACCEPT_ENCODINGr   r   ?decode)Z
keep_aliveZaccept_encodingZ
user_agentZ
basic_authZproxy_basic_authZdisable_cache?headers? r   ?cE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\request.py?make_headers   s.   *

??r   c              	   C   sV   |durt | |? |S t| dd?dur)z| ?? }W |S  ttfy(   t}Y |S w |S )z
    If a position is provided, move file to that point.
    Otherwise, we'll attempt to record a position for future use.
    N?tell)?rewind_body?getattrr   ?IOError?OSError?_FAILEDTELL)?body?posr   r   r   ?set_file_positionb   s   
	?
??r   c              	   C   sh   t | dd?}|dur$t|t?r$z||? W dS  ttfy#   td??w |tu r,td??tdt|? ??)z?
    Attempt to rewind body to a certain position.
    Primarily used for request redirects and retries.

    :param body:
        File-like object that supports seek.

    :param int pos:
        Position to seek to in file.
    ?seekNzAAn error occurred when rewinding request body for redirect/retry.zRUnable to record file position for rewinding request body during a redirect/retry.z4body_pos must be of type integer, instead it was %s.)	r   r   r   r   r   r   r   ?
ValueError?type)r   ?body_posZ	body_seekr   r   r   r   t   s    ???
?r   )NNNNNN)?
__future__r   ?base64r   ?
exceptionsr   Zpackages.sixr   r   ?SKIP_HEADER?	frozenset?SKIPPABLE_HEADERSr   ZbrotliZ_unused_module_brotli?ImportError?objectr   r   r   r   r   r   r   r   ?<module>   s.    ?
?H                                                                                                                            C ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                     D ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                     E ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    A?[b  ?                   @   s?   d dl Z d dlZd dlZd dlmZ zd dlmZ W n ey)   d dlmZ Y nw g d?ZG dd? de	?Z
ejdkr@d	d
? Zndd
? Zddd?Zddd?Zdd? Zdd? Zdd? addd?Zddd?ZdS )?    N)?partial)?	monotonic)?time)?NoWayToWaitForSocketError?wait_for_read?wait_for_writec                   @   s   e Zd ZdS )r   N)?__name__?
__module__?__qualname__? r   r   ?`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\wait.pyr      s    r   )?   ?   c                 C   s   | |?S ?Nr   )?fn?timeoutr   r   r   ?_retry_on_intr*   ?   r   c              
   C   s?   |d u r	t d?}nt? | }	 z| |?W S  ttjfyE } z"|jd tjkr(? |t?  }|dk r3d}|t d?kr;d }W Y d }~qd }~ww )N?infTr   )?floatr   ?OSError?select?error?args?errnoZEINTR)r   r   Zdeadline?er   r   r   r   0   s"   



??Fc           
      C   sd   |s|st d??g }g }|r|?| ? |r|?| ? ttj|||?}t||?\}}}	t|p0|p0|	?S )N?2must specify at least one of read=True, write=True)?RuntimeError?appendr   r   r   ?bool)
?sock?read?writer   ZrcheckZwcheckr   ZrreadyZwreadyZxreadyr   r   r   ?select_wait_for_socketG   s   

r#   c                    s^   |s|st d??d}|r|tjO }|r|tjO }t?? ? ? ?| |? ? fdd?}tt||??S )Nr   r   c                    s   | d ur| d9 } ? ? | ?S )Ni?  )?poll)?t?Zpoll_objr   r   ?do_pollf   s   
z%poll_wait_for_socket.<locals>.do_poll)r   r   ZPOLLINZPOLLOUTr$   ?registerr   r   )r    r!   r"   r   ?maskr'   r   r&   r   ?poll_wait_for_socketZ   s   

r*   c                  O   s   t d??)Nzno select-equivalent available)r   ?r   ?kwargsr   r   r   ?null_wait_for_socketn   r   r-   c               	   C   s4   zt ?? } t| jd? W dS  ttfy   Y dS w )Nr   FT)r   r$   r   ?AttributeErrorr   r&   r   r   r   ?_have_working_pollr   s   ??r/   c                  O   s.   t ? rtan
ttd?rtantat| i |??S )Nr   )r/   r*   ?wait_for_socket?hasattrr   r#   r-   r+   r   r   r   r0      s   
r0   c                 C   ?   t | d|d?S )z?Waits for reading to be available on a given socket.
    Returns True if the socket is readable, or False if the timeout expired.
    T)r!   r   ?r0   ?r    r   r   r   r   r   ?   ?   r   c                 C   r2   )z?Waits for writing to be available on a given socket.
    Returns True if the socket is readable, or False if the timeout expired.
    T)r"   r   r3   r4   r   r   r   r   ?   r5   r   )FFNr   )r   r   ?sys?	functoolsr   r   r   ?ImportError?__all__?	Exceptionr   ?version_infor   r#   r*   r-   r/   r0   r   r   r   r   r   r   ?<module>   s*    ?




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   0 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                     1 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                     2 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    A?[b?  ?                   @   s8   d Z ddlZdd? Zdd? Zdd? Zd	d
? Zdd? ZdS )zB
This module provides means to detect the App Engine environment.
?    Nc                   C   s   t ? pt? S )N)?is_local_appengine?is_prod_appengine? r   r   ?qE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\contrib\_appengine_environ.py?is_appengine   s   r   c                   C   s   t ? o	tjd dkS )a#  Reports if the app is running in the first generation sandbox.

    The second generation runtimes are technically still in a sandbox, but it
    is much less restrictive, so generally you shouldn't need to check for it.
    see https://cloud.google.com/appengine/docs/standard/runtimes
    ?APPENGINE_RUNTIMEZpython27)r   ?os?environr   r   r   r   ?is_appengine_sandbox   s   r
   c                   C   ?   dt jv ot j?dd??d?S )Nr   ?SERVER_SOFTWARE? zDevelopment/?r   r	   ?get?
startswithr   r   r   r   r      ?
   ??r   c                   C   r   )Nr   r   r   zGoogle App Engine/r   r   r   r   r   r      r   r   c                   C   s   dS )zDeprecated.Fr   r   r   r   r   ?is_prod_appengine_mvms"   s   r   )?__doc__r   r   r
   r   r   r   r   r   r   r   ?<module>   s    
                                                                                                                                                                                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    A?[b%  ?                   @   s?   d dl mZ d dlZddlmZ ddlmZ ddlmZ ddl	m
Z
mZ d	d
? Zejddfdd?Zdd? Zdd? Zdd? Zed?ZdS )?    )?absolute_importN?   )?_appengine_environ)?LocationParseError)?six?   )?NoWayToWaitForSocketError?wait_for_readc                 C   sH   t | dd?}|du rdS |du rdS zt|dd?W S  ty#   Y dS w )a$  
    Returns True if the connection is dropped and should be closed.

    :param conn:
        :class:`http.client.HTTPConnection` object.

    Note: For platforms like AppEngine, this will always return ``False`` to
    let the platform handle connection recycling transparently for us.
    ?sockFNTg        )?timeout)?getattrr	   r   )?connr
   ? r   ?fE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\connection.py?is_connection_dropped   s   
?r   c                 C   s(  | \}}|? d?r|?d?}d}t? }z|?d? W n ty-   t?td| ?d? Y S w t?	|||tj
?D ]Q}|\}	}
}}}d}z't?|	|
|?}t||? |tjurY|?|? |r`|?|? |?|? |W   S  tjy? } z|}|dur~|??  d}W Y d}~q7d}~ww |dur?|?t?d??)ak  Connect to *address* and return the socket object.

    Convenience function.  Connect to *address* (a 2-tuple ``(host,
    port)``) and return the socket object.  Passing the optional
    *timeout* parameter will set the timeout on the socket instance
    before attempting to connect.  If no *timeout* is supplied, the
    global default timeout setting returned by :func:`socket.getdefaulttimeout`
    is used.  If *source_address* is set it must be a tuple of (host, port)
    for the socket to bind as a source address before making the connection.
    An host of '' or port 0 tells the OS to use the default.
    ?[z[]N?idnaz'%s', label empty or too longz!getaddrinfo returns an empty list)?
startswith?strip?allowed_gai_family?encode?UnicodeErrorr   ?
raise_fromr   ?socket?getaddrinfo?SOCK_STREAM?_set_socket_options?_GLOBAL_DEFAULT_TIMEOUT?
settimeout?bind?connect?error?close)?addressr   ?source_address?socket_options?host?port?err?family?res?af?socktype?proto?	canonname?sar
   ?er   r   r   ?create_connection%   sD   

??





??
r1   c                 C   s$   |d u rd S |D ]}| j |?  qd S )N)?
setsockopt)r
   ?options?optr   r   r   r   d   s
   ?r   c                  C   s   t j} trt j} | S )z?This function is designed to work in the context of
    getaddrinfo, where family=socket.AF_UNSPEC is the default and
    will perform a DNS search for both IPv6 and IPv4 records.)r   ?AF_INET?HAS_IPV6?	AF_UNSPEC)r)   r   r   r   r   l   s   r   c                 C   s`   d}d}t ?? r
dS tjr(zt?tj?}|?| df? d}W n	 ty'   Y nw |r.|??  |S )z4Returns True if the system can bind an IPv6 address.NFr   T)r   Zis_appengine_sandboxr   ?has_ipv6?AF_INET6r   ?	Exceptionr"   )r&   r
   r8   r   r   r   ?	_has_ipv6w   s   ?r;   z::1)?
__future__r   r   Zcontribr   ?
exceptionsr   ?packagesr   ?waitr   r	   r   r   r1   r   r   r;   r6   r   r   r   r   ?<module>   s    
??                                                                                                                                                       ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                      ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?o
    A?[b?  ?                   @   s?   d dl mZ ddlmZ ddlmZmZmZ ddlm	Z	 ddl
mZ ddlmZmZmZmZmZmZmZmZmZmZ ddlmZmZ dd	lmZmZmZmZ dd
lm Z m!Z! dZ"dS )?    )?absolute_import?   )?is_connection_dropped)?SKIP_HEADER?SKIPPABLE_HEADERS?make_headers)?is_fp_closed)?Retry)
?ALPN_PROTOCOLS?HAS_SNI?IS_PYOPENSSL?IS_SECURETRANSPORT?PROTOCOL_TLS?
SSLContext?assert_fingerprint?resolve_cert_reqs?resolve_ssl_version?ssl_wrap_socket)?Timeout?current_time)?Url?get_host?	parse_url?split_first)?wait_for_read?wait_for_write)r   r   r   r   r   r
   r	   r   r   r   r   r   r   r   r   r   r   r   r   r   r   r   r   r   N)#?
__future__r   ?
connectionr   ?requestr   r   r   ?responser   Zretryr	   Zssl_r
   r   r   r   r   r   r   r   r   r   ?timeoutr   r   ?urlr   r   r   r   ?waitr   r   ?__all__? r$   r$   ?dE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\__init__.py?<module>   s    0                                                                                                                                                                                                                                                                                                                                                                                                                                               ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                    m ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                    n ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                    o ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                    p ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                    q ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                    r ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                    s ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                    t ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                    u ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                    v ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                    w ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                    x ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?INDX( 	 f<^           (     ?       ?  o                 D
    ? v     D
    -??LR?-??LR?-??LR?-??LR? @      I5               c o n n e c t i o n . c p y t h o n - 3 1 0 . p y c . D
    ? ~     D
    ?P??LR??P??LR??P??LR??P??LR? p      c               c o n n e c t i o n p o o l . c p y t h o n - 3 1 0 . p y c  D
    ? v     D
    ?٧?LR??٧?LR??٧?LR??٧?LR? 0      ?*               e x c e p t i o n s . c p y t h o n - 3 1 0 . p y c 4 ,D
    ? n     D
    N??LR 7???LR?7???LR?7???LR?        ?               f i e l d s . c p y t h o n - 3 1 0 . p y c y +D
    ? r     D
    N??LR?N??LR?N??LR?N??LR?       ?
               f i l e p o s t . c p y t h o n - 3 1 0 . p y c 
    /D
    ? x     D
    kv??LR?kv??LR?kv??LR?kv??LR? @      _;               p o o l m a n a g e r . c p y t h o n - 3 1 0 . p y c *D
    ? p     D
    ????LR?????LR?????LR?????LR?        ?               r e q u e s t . c p y t h o n - 3 1 0 . p y c -D
    ? r    D
    ???LR????LR????LR????LR? `      ?Q               r e s p o n s e . c p y t h o n - 3 1 0 . p y c . p y (D
    ? z     D
    R???LR?R???LR?R???LR?R???LR? 0      l*               _ c o l l e c t i o n s . c p y t h o n - 3 1 0 . p y c 
    D
    ? r     D
    ڊ??LR?ڊ??LR?ڊ??LR?ڊ??LR??       ?                _ v e r s i o n . c p y t h o n - 3 1 0 . p y c . 1 4 D
    ? r     D
    ?٧?LR??٧?LR??٧?LR??٧?LR?       ?               _ _ i n i t _ _ . c p y t h  n - 3 1 0 . p y c . 1 4               0 . p y c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  o
    A?[b?
  ?                   @   s@  d Z ddlmZ ddlZddlZddlmZ ddlmZ ddlm	Z	 ddl
mZmZmZ dd	lmZ dd
lmZmZmZ ddlmZ ddlmZ ddlmZ ddlmZ ddlmZ dZdZe	Z	dZ e?!e"??#e? ? ej$fdd?Z%[ej&dej'dd? ej&dej(dd? ej&dej)dd? ej&dej*dd? ej+fdd?Z,dS )ze
Python HTTP library with thread-safe connection pooling, file post support, user friendly, and more
?    )?absolute_importN)?NullHandler?   )?
exceptions)?__version__)?HTTPConnectionPool?HTTPSConnectionPool?connection_from_url)?encode_multipart_formdata)?PoolManager?ProxyManager?proxy_from_url)?HTTPResponse)?make_headers)?Retry)?Timeout)?get_hostz(Andrey Petrov (andrey.petrov@shazow.net)ZMIT)r   r   r   r   r   r   r   ?add_stderr_loggerr	   ?disable_warningsr
   r   r   r   c                 C   sF   t ?t?}t ?? }|?t ?d?? |?|? |?| ? |?dt? |S )z?
    Helper for quickly adding a StreamHandler to the logger. Useful for
    debugging.

    Returns the handler after adding it.
    z%%(asctime)s %(levelname)s %(message)sz,Added a stderr logging handler to logger: %s)	?logging?	getLogger?__name__?StreamHandler?setFormatter?	Formatter?
addHandler?setLevel?debug)?level?logger?handler? r!   ?_E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\__init__.pyr   .   s   
	

r   ?alwaysT)?append?defaultc                 C   s   t ?d| ? dS )z<
    Helper for quickly disabling all urllib3 warnings.
    ?ignoreN)?warnings?simplefilter)?categoryr!   r!   r"   r   Q   s   r   )-?__doc__?
__future__r   r   r'   r   ? r   ?_versionr   Zconnectionpoolr   r   r	   Zfilepostr
   Zpoolmanagerr   r   r   ?responser   Zutil.requestr   Z
util.retryr   Zutil.timeoutr   Zutil.urlr   ?
__author__?__license__?__all__r   r   r   ?DEBUGr   r(   ZSecurityWarningZSubjectAltNameWarningZInsecurePlatformWarningZSNIMissingWarningZHTTPWarningr   r!   r!   r!   r"   ?<module>   s6                                                                                                                                                                                                                                                                                                                                                                                           ? ? ? ? ? ? ? ? ? ? ??                                                 & ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                 ' ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                 ( ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                 ) ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                 * ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                 + ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                 , ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                 - ? ? ? ? ? ?o
    ??[b
  ?                
   @   s\  d Z ddlmZ ddlZddlmZ dZzddlmZ	 W n e
y'   dZ	Y nw dd? Zd	d
? Zz	eeje	e? W n eefyP   e?d?eje	e?e? Y nw z:ddlmZ es^e
d??zddlZW n e
yo   dZY nw eedd?s?ddlmZ e??  ddlmZ ee? W n	 e
y?   Y nw ddlmZ e?de? ddlmZmZmZmZ ddlm Z m!Z!m"Z"m#Z# ddlm$Z$m%Z% ddl&m'Z' ddl&m(Z( ddl)m*Z*m+Z+m,Z, ddl-m.Z.m/Z/m0Z0m1Z1m2Z2m3Z3m4Z4m5Z5 ddl6m7Z7m8Z8 ddl9m:Z: ddlm;Z;m<Z<m=Z=m>Z>m?Z?m@Z@mAZAmBZBmCZCmDZD ddlEZEddlEmFZF eE?GeH??IeF? ? ejdeAdd ? dS )!a?  
Requests HTTP Library
~~~~~~~~~~~~~~~~~~~~~

Requests is an HTTP library, written in Python, for human beings.
Basic GET usage:

   >>> import requests
   >>> r = requests.get('https://www.python.org')
   >>> r.status_code
   200
   >>> b'Python is a programming language' in r.content
   True

... or POST:

   >>> payload = dict(key1='value1', key2='value2')
   >>> r = requests.post('https://httpbin.org/post', data=payload)
   >>> print(r.text)
   {
     ...
     "form": {
       "key1": "value1",
       "key2": "value2"
     },
     ...
   }

The other HTTP methods are supported - see `requests.api`. Full documentation
is at <https://requests.readthedocs.io>.

:copyright: (c) 2017 by Kenneth Reitz.
:license: Apache 2.0, see LICENSE for more details.
?    )?urllib3N?   )?RequestsDependencyWarning)?__version__c                 C   s<  | ? d?} | dgksJ ?t| ?dkr| ?d? | \}}}t|?t|?t|?}}}|dks0J ?|dks6J ?|dks<J ?|rk|? d?d d? \}}}t|?t|?t|?}}}d	|||f  krfd
k siJ ? J ?d S |r?|? d?d d? \}}}t|?t|?t|?}}}d|||f  kr?dk s?J ? J ?d S td??)N?.?dev?   ?0r   ?   ?   ?   )r   r   r   )?   r   r   )r   r   r   )r   r   r   z7You need either charset_normalizer or chardet installed)?split?len?append?int?	Exception)Zurllib3_version?chardet_version?charset_normalizer_version?major?minor?patch? r   ?`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\requests\__init__.py?check_compatibility6   s$   


&&r   c                 C   sX   zt tt| ?d???} W n
 ty   Y d S w | g d?k r*d?| ?}t?|t? d S d S )Nr   )r   r   ?   z4Old version of cryptography ({}) may cause slowdown.)	?list?mapr   r   ?
ValueError?format?warnings?warnr   )?cryptography_version?warningr   r   r   ?_check_cryptographyT   s   ?
?r$   zWurllib3 ({}) or chardet ({})/charset_normalizer ({}) doesn't match a supported version!)?WINDOWSz3pip internals: don't import cryptography on WindowsZHAS_SNIF)?	pyopenssl)?DependencyWarning?ignore)?	__title__?__description__?__url__r   )?	__build__?
__author__?__author_email__?__license__)?__copyright__?__cake__)?utils)?packages)?Request?Response?PreparedRequest)?request?get?head?postr   ?put?delete?options)?session?Session)?codes)
?RequestException?Timeout?URLRequired?TooManyRedirects?	HTTPError?ConnectionError?FileModeWarning?ConnectTimeout?ReadTimeout?JSONDecodeError)?NullHandler?defaultT)r   )J?__doc__Zpip._vendorr   r    ?
exceptionsr   r   Zpip._vendor.chardetr   r   ?ImportErrorr   r$   ?AssertionErrorr   r!   r   ?pip._internal.utils.compatr%   ?ssl?getattr?pip._vendor.urllib3.contribr&   ?inject_into_urllib3Zcryptographyr"   Zpip._vendor.urllib3.exceptionsr'   ?simplefilterr)   r*   r+   r,   r-   r.   r/   r0   r1   ? r2   r3   Zmodelsr4   r5   r6   Zapir7   r8   r9   r:   r   r;   r<   r=   Zsessionsr>   r?   ?status_codesr@   rA   rB   rC   rD   rE   rF   rG   rH   rI   rJ   ?loggingrK   ?	getLogger?__name__?
addHandlerr   r   r   r   ?<module>   sl   #??????(0                                                             o
    >?[b?  ?                   @   s,   G d d? d?Z e ? ZG dd? d?Ze? ZdS )c                   @   s?   e Zd Zdefdd?Zdefdd?Zdedefdd?Z	dedefd	d
?Z
dedefdd?Zdedefdd?Zdedefdd?Zdeddfdd?ZdS )?InfinityType?returnc                 C   ?   dS )N?Infinity? ??selfr   r   ?dE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\packaging\_structures.py?__repr__   ?   zInfinityType.__repr__c                 C   ?   t t| ??S ?N??hash?reprr   r   r   r   ?__hash__
   ?   zInfinityType.__hash__?otherc                 C   r   ?NFr   ?r   r   r   r   r   ?__lt__   r
   zInfinityType.__lt__c                 C   r   r   r   r   r   r   r   ?__le__   r
   zInfinityType.__le__c                 C   ?   t || j?S r   ??
isinstance?	__class__r   r   r   r   ?__eq__   r   zInfinityType.__eq__c                 C   r   ?NTr   r   r   r   r   ?__gt__   r
   zInfinityType.__gt__c                 C   r   r   r   r   r   r   r   ?__ge__   r
   zInfinityType.__ge__r   ?NegativeInfinityTypec                 C   ?   t S r   )?NegativeInfinityr   r   r   r   ?__neg__   r
   zInfinityType.__neg__N)?__name__?
__module__?__qualname__?strr	   ?intr   ?object?boolr   r   r   r   r   r"   r   r   r   r   r      ?    r   c                   @   s?   e Zd Zdefdd?Zdefdd?Zdedefdd?Z	dedefd	d
?Z
dedefdd?Zdedefdd?Zdedefdd?Zdedefdd?ZdS )r   r   c                 C   r   )Nz	-Infinityr   r   r   r   r   r	   $   r
   zNegativeInfinityType.__repr__c                 C   r   r   r   r   r   r   r   r   '   r   zNegativeInfinityType.__hash__r   c                 C   r   r   r   r   r   r   r   r   *   r
   zNegativeInfinityType.__lt__c                 C   r   r   r   r   r   r   r   r   -   r
   zNegativeInfinityType.__le__c                 C   r   r   r   r   r   r   r   r   0   r   zNegativeInfinityType.__eq__c                 C   r   r   r   r   r   r   r   r   3   r
   zNegativeInfinityType.__gt__c                 C   r   r   r   r   r   r   r   r   6   r
   zNegativeInfinityType.__ge__r   c                 C   r    r   )r   r   r   r   r   r"   9   r
   zNegativeInfinityType.__neg__N)r#   r$   r%   r&   r	   r'   r   r(   r)   r   r   r   r   r   r   r"   r   r   r   r   r   #   r*   r   N)r   r   r   r!   r   r   r   r   ?<module>   s   
                                                                                                                                                                                                                                                                                                                                                                                                                             ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                                ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                      INDX( 	 ?ra           (   ?  ?       ??4                 E
    ? p     D
    ?)??LR??)??LR??)??LR??)??LR? 0      F$               m a r k e r s . c p y t h o n - 3 1 0 . p y c ?D
    ? z     D
    e?U?LR?e?U?LR?e?U?LR?e?U?LR?       ?               r e q u i r e m e n t s . c p y t h o n - 3 1 0 . p y c l     E
    ? v     D
    ????LR?????LR?????LR?????LR? `      T               s p e c i f i e r s . c p y t h o n - 3 1 0 . p y c  D
    ? j     D
    D??LR?D??LR D??LR?D??LR? 0      ?/               t a g s . c p y t h o n - 3 1 0 . p y c c . p D
    ? l     D
    "???LR?"???LR?"???LR?"???LR?       ?               u t i l s . c p y t h o n - 3 1 0 . p y c . p D
    ? p     D
    *??LR?*??LR?*??LR?*??LR? @      z2               v e r s i o n . c p y t h o n - 3 1 0 . p y c D
    ? v     D
    re??LR?re??LR?re??LR?re??LR?        ?               _ m a n y l i n u x . c p y t h o n - 3 1 0 . p y c 4 D
    ? v     D
    Bǔ?LR Bǔ?LR?Bǔ?LR?Bǔ?LR?                       _ m u s l l i n u x . c p y t h o n - 3 1 0 . p y c 4 	D
    ? x     D
    ????LR?????LR?????LR?????LR?       ?
               _ s t r u c t u r e s . c p y t h o n - 3 1 0 . p y c D
    ? t     D
    ????LR?????LR?????LR?????LR?P      K               _ _ a b o u t _ _ . c p y t h o n - 3 1 0 . p y c 1 4 D
    ? r     D
    ????LR?????LR?????LR?????LR??      ?               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1                0 . p y c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          o
    >?[bh  ?                	   @   s  d dl Z d dlmZmZmZmZmZ ddlmZm	Z	 ddl
mZmZ eed eeef f Zede?ZG dd	? d	e?ZG d
d? de?Ze ?d?Ze ?d?Zdedefdd?Zdeeef defdd?Zdedeeeeee f fdd?Zdedeeef fdd?ZdS )?    N)?	FrozenSet?NewType?Tuple?Union?cast?   )?Tag?	parse_tag)?InvalidVersion?Version? ?NormalizedNamec                   @   ?   e Zd ZdZdS )?InvalidWheelFilenamezM
    An invalid wheel filename was found, users should refer to PEP 427.
    N??__name__?
__module__?__qualname__?__doc__r   r   r   ?^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\packaging\utils.pyr      ?    r   c                   @   r   )?InvalidSdistFilenamez^
    An invalid sdist filename was found, users should refer to the packaging user guide.
    Nr   r   r   r   r   r      r   r   z[-_.]+z	(\d+)(.*)?name?returnc                 C   s   t ?d| ??? }tt|?S )N?-)?_canonicalize_regex?sub?lowerr   r   )r   ?valuer   r   r   ?canonicalize_name    s   
r   ?versionc              
   C   s?   t | t?rzt| ?}W q ty   |  Y S w | }g }|jdkr)|?|j? d?? |?t?ddd?dd? |j	D ???? |j
durO|?d?d	d? |j
D ??? |jdur]|?d
|j? ?? |jdurk|?d|j? ?? |jdury|?d|j? ?? d?|?S )z?
    This is very similar to Version.__str__, but has one subtle difference
    with the way it handles the release segment.
    r   ?!z(\.0)+$? ?.c                 s   ?   ? | ]}t |?V  qd S ?N??str??.0?xr   r   r   ?	<genexpr><   ?   ? z'canonicalize_version.<locals>.<genexpr>Nc                 s   r$   r%   r&   r(   r   r   r   r+   @   r,   z.postz.dev?+)?
isinstancer'   r   r
   Zepoch?append?rer   ?join?release?preZpostZdev?local)r    Zparsed?partsr   r   r   ?canonicalize_version&   s(   
?
&




r6   ?filenamec           
      C   s  | ? d?std| ? ???| d d? } | ?d?}|dvr"td| ? ???| ?d|d ?}|d }d	|v s<t?d
|tj?d u rCtd| ? ???t|?}t|d ?}|dkry|d }t	?|?}|d u ritd|? d| ? d???t
tt|?d??|?d?f?}nd}t|d ?}	||||	fS )Nz.whlz3Invalid wheel filename (extension must be '.whl'): ?????r   )?   ?   z0Invalid wheel filename (wrong number of parts): ?   r   ?__z^[\w\d._]*$zInvalid project name: r   r:   zInvalid build number: z in '?'r   ?????)?endswithr   ?count?splitr0   ?match?UNICODEr   r   ?_build_tag_regexr   ?BuildTag?int?groupr	   )
r7   Zdashesr5   ?	name_partr   r    Z
build_partZbuild_match?build?tagsr   r   r   ?parse_wheel_filenameQ   s6   
?
?
? rK   c                 C   s?   | ? d?r| d td? ? }n| ? d?r| d td? ? }ntd| ? ???|?d?\}}}|s6td| ? ???t|?}t|?}||fS )Nz.tar.gzz.zipz@Invalid sdist filename (extension must be '.tar.gz' or '.zip'): r   zInvalid sdist filename: )r?   ?lenr   ?
rpartitionr   r   )r7   Z	file_stemrH   ?sepZversion_partr   r    r   r   r   ?parse_sdist_filenameu   s   

??rO   )r0   ?typingr   r   r   r   r   rJ   r   r	   r    r
   r   rF   r'   rE   r   ?
ValueErrorr   r   ?compiler   rD   r   r6   rK   rO   r   r   r   r   ?<module>   s$   


+?
?$            ` ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            a ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            b ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                              o
    <?[bd  ?                   @   s
  d Z ddlmZ ddlZddlZddlZdZej?	ej?
e??Zdd? Ze?re?ej?ed??ej ejdd?< ed? ed	? ed
? ed? ed? ed? ed? ed? ed? ed? ed? ed? ed? ed? ed? ed? ed? ed? ed? ed? ed? ed? ed? ed? ed ? ed!? ed"? ed#? ed$? ed%? ed&? ed'? ed(? ed)? ed*? ed+? ed,? ed-? ed.? ed/? ed0? ed1? ed2? ed3? ed4? ed5? ed6? ed7? ed8? ed9? dS dS ):z?
pip._vendor is for vendoring dependencies of pip to prevent needing pip to
depend on something external.

Files inside of pip._vendor should be considered immutable and should only be
updated to versions from upstream.
?    )?absolute_importNFc                 C   sv   d? t| ?}zt| t? t? dd? W n
 ty   Y d S w tj|  tj|< |?dd?\}}t	tj| |tj|  ? d S )Nz{0}.{1}r   )?level?.?   )
?format?__name__?
__import__?globals?locals?ImportError?sys?modules?rsplit?setattr)Z
modulenameZvendored_name?base?head? r   ?WE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\__init__.py?vendored   s   	?r   z*.whlZcachecontrolZcertifiZcoloramaZdistlibZdistro?html5libZsixz	six.moveszsix.moves.urllibzsix.moves.urllib.parseZ	packagingzpackaging.versionzpackaging.specifiersZpep517Zpkg_resourcesZplatformdirsZprogressZrequestszrequests.exceptionszrequests.packageszrequests.packages.urllib3z&requests.packages.urllib3._collectionsz$requests.packages.urllib3.connectionz(requests.packages.urllib3.connectionpoolz!requests.packages.urllib3.contribz*requests.packages.urllib3.contrib.ntlmpoolz+requests.packages.urllib3.contrib.pyopensslz$requests.packages.urllib3.exceptionsz requests.packages.urllib3.fieldsz"requests.packages.urllib3.filepostz"requests.packages.urllib3.packagesz/requests.packages.urllib3.packages.ordered_dictz&requests.packages.urllib3.packages.sixz5requests.packages.urllib3.packages.ssl_match_hostnamezErequests.packages.urllib3.packages.ssl_match_hostname._implementationz%requests.packages.urllib3.poolmanagerz!requests.packages.urllib3.requestz"requests.packages.urllib3.responsezrequests.packages.urllib3.utilz)requests.packages.urllib3.util.connectionz&requests.packages.urllib3.util.requestz'requests.packages.urllib3.util.responsez$requests.packages.urllib3.util.retryz#requests.packages.urllib3.util.ssl_z&requests.packages.urllib3.util.timeoutz"requests.packages.urllib3.util.urlZ
resolvelibZtenacityZtomliZurllib3)?__doc__Z
__future__r   ZglobZos.path?osr   Z	DEBUNDLED?path?abspath?dirname?__file__Z	WHEEL_DIRr   ?joinr   r   r   r   ?<module>   sz    $?                                                                                                                                                                  ? ? ? ? ? ? ? ? ??                                            G ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            H ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            I ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            J ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            K ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            L ? ? ? ? ? ? ?INDX( 	 ?Ab           (   ?  ?        y _                 ?C
    ? ~     ?C
    v???LR?v???LR?v???LR?v???LR?        ?               a u t o c o m p l e t i o n . c p y t h o n - 3 1 0 . p y c   ?D
    ? z     ?C
    %L?LR?%L?LR?%L?LR?%L?LR?        ?               b a s e _ c o m m a n d . c p y t h o n - 3 1 0 . p y c 
    ?C
    ? v     ?C
    y??LR??ۈ?LR??ۈ?LR??ۈ?LR? `      X               c m d o p t i o n s . c p y t h o n - 3 1 0 . p y c  ?D
    ? ?     ?C
    ?N?LR??N?LR??N?LR??N?LR?                      c o m m a n d _ c o n t e x t . c p y t h o n - 3 1 0 . p y c ?C
    ? j     ?C
    ?R?LR??R?LR??R?LR??R?LR?       W               m a i n . c p y t h o n - 3 1 0 . p y c . p y ?C
    ? x     ?C
    ???LR????LR????LR????LR?       i               m a i n _ p a r s e r . c p y t h o n - 3 1 0 . p y c 
D
    ? n     ?C
    ????LR?????LR?????LR?????LR? 0      ?&               p a r s e r . c p y t h o n - 3 1 0 . p y c  ?D
    ? |     ?C
    x?1?LR?x?1?LR?x?1?LR?x?1?LR? 0      $               p r o g r e s s _ b a r s . c p y t h o n - 3 1 0 . p y c     E
    ? x     ?C
    Vȵ?LR?Vȵ?LR?Vȵ?LR?Vȵ?LR? @      ?4               r e q _ c o m m a n d . c p y t h o n - 3 1 0 . p y c AE
    ? r     ?C
    ? ?LR?? ?LR?? ?LR?? ?LR?        O               s p i n n e r s . c p y t h o n - 3 1 0 . p y c . p y D
    ? z     ?C
    ?Q??LR??Q??LR??Q??LR??Q??LR?`      \               s t a t u s  c o d e s . c p y t h o n - 3 1 0 . p y c       ?C
    ? r     ?C
    ?R?LR??R?LR??R?LR??R?LR?                     _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4               c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          o
    :?[b6
  ?                   @   s?   d Z ddlZddlZddlmZmZ ddlmZ ddlm	Z	m
Z
 ddlmZmZ ddlmZ ddlmZmZ d	d
gZde	fdd	?Zdee deeee f fdd
?ZdS )z=A single place for constructing and exposing the main parser
?    N)?List?Tuple)?
cmdoptions)?ConfigOptionParser?UpdatingDefaultsHelpFormatter)?commands_dict?get_similar_commands)?CommandError)?get_pip_version?get_prog?create_main_parser?parse_command?returnc                  C   sl   t ddt? dt? d?} | ??  t? | _t?tj| ?}| ?	|? d| _
dgdd? t?? D ? }d	?|?| _| S )
z1Creates and returns the main parser for pip's CLIz
%prog <command> [options]F?global)?usage?add_help_option?	formatter?name?progT? c                 S   s"   g | ]\}}|d ?d|j ? ??qS )Z27? )Zsummary)?.0r   Zcommand_info? r   ?`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\cli\main_parser.py?
<listcomp>'   s    ??z&create_main_parser.<locals>.<listcomp>?
)r   r   r   ?disable_interspersed_argsr
   ?versionr   Zmake_option_groupZgeneral_group?add_option_group?mainr   ?items?join?description)?parserZgen_optsr"   r   r   r   r      s"   ?

??argsc                 C   s?   t ? }|?| ?\}}|jrtj?|j? tj?tj? t??  |r-|d dkr5t	|?dkr5|?
?  t??  |d }|tvrZt|?}d|? d?g}|rS|?d|? d?? td?|???| d d ? }|?|? ||fS )Nr   ?help?   zunknown command "?"zmaybe you meant "z - )r   ?
parse_argsr   ?sys?stdout?write?os?linesep?exit?len?
print_helpr   r   ?appendr	   r!   ?remove)r$   r#   Zgeneral_optionsZ	args_else?cmd_nameZguess?msg?cmd_argsr   r   r   r   0   s&   	
)?__doc__r,   r)   ?typingr   r   Zpip._internal.clir   Zpip._internal.cli.parserr   r   ?pip._internal.commandsr   r   ?pip._internal.exceptionsr	   Zpip._internal.utils.miscr
   r   ?__all__r   ?strr   r   r   r   r   ?<module>   s    &                                                                                                                                                                                                                                                                                                                                                                                                                                
 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                            ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??          o
    :?[b?	  ?                   @   s?   d Z ddlZddlZddlZddlZddlmZmZ ddlm	Z	 ddl
mZ ddlmZ ddlmZ ddlmZ e?e?Zdd	eee  d
efdd?ZdS )z Primary application entrypoint.
?    N)?List?Optional)?autocomplete)?parse_command)?create_command)?PipError)?deprecation?args?returnc              
   C   s?   | d u rt jdd ? } t??  t?  zt| ?\}}W n' tyA } zt j?d|? ?? t j?t	j
? t ?d? W Y d }~nd }~ww z	t?tjd? W n tjyd } zt?d|? W Y d }~nd }~ww t|d|v d?}|?|?S )N?   zERROR: ? z%Ignoring error %s when setting localez
--isolated)?isolated)?sys?argvr   Zinstall_warning_loggerr   r   r   ?stderr?write?os?linesep?exit?locale?	setlocale?LC_ALL?Error?logger?debugr   ?main)r	   Zcmd_nameZcmd_args?exc?eZcommand? r   ?YE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\cli\main.pyr   -   s(   ????
r   )N)?__doc__r   ?loggingr   r   ?typingr   r   Z pip._internal.cli.autocompletionr   Zpip._internal.cli.main_parserr   Zpip._internal.commandsr   Zpip._internal.exceptionsr   Zpip._internal.utilsr   ?	getLogger?__name__r   ?str?intr   r   r   r   r   ?<module>   s    
                                                                                                                                                                                                  < ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          = ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          > ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          @ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          A ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          B ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          C ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          D ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          E ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          F ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          G ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          H ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          I ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          J ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??        o
    <?[b?  ?                   @   sR   d Z ddlZddlmZmZ dZG dd? dej?Zdedefd	d
?Z	ddd?Z
dS )z?Customize logging

Defines custom logger class for the `logger.verbose(...)` method.

init_logging() must be called before any other modules that call logging.getLogger.
?    N)?Any?cast?   c                   @   s*   e Zd ZdZdedededdfdd?ZdS )	?VerboseLoggerzXCustom Logger, defining a verbose log-level

    VERBOSE is between INFO and DEBUG.
    ?msg?args?kwargs?returnNc                 O   s   | j t|g|?R i |??S )N)?log?VERBOSE)?selfr   r   r   ? r   ?[E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\utils\_log.py?verbose   s   zVerboseLogger.verbose)?__name__?
__module__?__qualname__?__doc__?strr   r   r   r   r   r   r      s    r   ?namer	   c                 C   s   t tt?| ??S )zBlogging.getLogger, but ensures our VerboseLogger class is returned)r   r   ?logging?	getLogger)r   r   r   r   r      s   r   c                   C   s   t ?t? t ?td? dS )z?Register our VerboseLogger and VERBOSE log level.

    Should be called before any calls to getLogger(),
    i.e. in pip._internal.__init__
    r   N)r   ZsetLoggerClassr   ZaddLevelNamer   r   r   r   r   ?init_logging   s   
r   )r	   N)r   r   ?typingr   r   r   ZLoggerr   r   r   r   r   r   r   r   ?<module>   s    
                            $ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          % ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          & ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ' ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ( ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ) ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          * ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          + ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          , ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          - ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          . ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          / ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          0 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          1 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          2 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                        o
    ;?[b  ?                   @   s    d Z ddlZddd?Ze?  dS )a-  A helper module that injects SecureTransport, on import.

The import should be done as early as possible, to ensure all requests and
sessions (or whatever) are created after injecting SecureTransport.

Note that we only do the injection on macOS, when the linked OpenSSL is too
old to handle TLSv1.2.
?    N?returnc               	   C   st   t jdkrd S zdd l} W n
 ty   Y d S w | jdkrd S zddlm} W n ttfy3   Y d S w |??  d S )N?darwinr   i )?securetransport)	?sys?platform?ssl?ImportErrorZOPENSSL_VERSION_NUMBERZpip._vendor.urllib3.contribr   ?OSErrorZinject_into_urllib3)r   r   ? r
   ?mE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\utils\inject_securetransport.py?inject_securetransport   s   
?
?r   )r   N)?__doc__r   r   r
   r
   r
   r   ?<module>   s    	

                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          
 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                        o
    :?[b=  ?                   @   sL   d dl mZmZ d dlZd dlmZ e??  ddeee  de	fdd?Z
dS )	?    )?List?OptionalN)?_log?args?returnc                 C   s   ddl m} || ?S )z?This is preserved for old console scripts that may still be referencing
    it.

    For additional details, see https://github.com/pypa/pip/issues/7498.
    r   )?_wrapper)?pip._internal.utils.entrypointsr   )r   r   ? r	   ?YE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\__init__.py?main   s   r   )N)?typingr   r   Z*pip._internal.utils.inject_securetransportZpipZpip._internal.utilsr   Zinit_logging?str?intr   r	   r	   r	   r
   ?<module>   s
                                                                                                                                                                                                                                                                                             p ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         q ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         r ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         s ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         t ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         u ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         v ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         w ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         x ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         y ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         z ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         { ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         | ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         } ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                         ~ ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                           ? ? ? ? ? ? ? ? ? ? ? ? ?o
    9?[b|  ?                   @   s?   d Z ddlZddlZej?e?Zdd? ZdZej	dkr,G dd? d?Z
ej?de
? ? dS dd	lmZ dd
lmZmZ G dd? dee?ZG dd? dee?Zej?e? ? dS )z>Patches that are applied at runtime to the virtual environment?    Nc                    s    | j j? ? fdd?}|| j _dS )a  
    Distutils allows user to configure some arguments via a configuration file:
    https://docs.python.org/3/install/index.html#distutils-configuration-files

    Some of this arguments though don't make sense in context of the virtual environment files, let's fix them up.
    c                    sj   ? | g|?R i |??}| ? d?}d|v rttj?tj?f|d< dD ]}d?|?}||v r2|?|d ? q!|S )N?install?prefix)ZpurelibZplatlibZheadersZscripts?dataz
install_{})	Zget_option_dict?VIRTUALENV_PATCH_FILE?os?path?abspath?sysr   ?format?pop)?self?args?kwargs?resultr   ?base?key?Zold_parse_config_files? ?NE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\_virtualenv.py?parse_config_files   s   

?z&patch_dist.<locals>.parse_config_filesN)ZDistributionr   )Zdistr   r   r   r   ?
patch_dist
   s   r   )zdistutils.distzsetuptools.dist)?   ?   c                   @   s:   e Zd ZdZdZg Zd	dd?Zedd? ?Zedd? ?Z	dS )
?_FinderzFA meta path finder that allows patching the imported distutils modulesNc              	   C   s:  |t v r?| jd u r?t| j?dkrdd l}|?? }| j?|? ddlm} ddl	m
} | jd ?` || _zO|||?}|d ur~t|jd?}	|	rGdnd}
t|j|
?}|	rT| jn| j}||urqzt|j|
|||?? W n	 typ   Y nw |W d | _W  d   ? S W d | _nd | _w W d   ? d S 1 s?w   Y  d S d S d S )Nr   )?partial)?	find_spec?exec_module?load_module)?_DISTUTILS_PATCH?fullname?len?lock?	threadingZLock?appendZ	functoolsr   Zimportlib.utilr   ?hasattr?loader?getattrr   r   ?setattr?AttributeError)r   r   r   ?targetr"   r!   r   r   ?specZ
is_new_apiZ	func_name?old?funcr   r   r   r   3   s:   
??"??z_Finder.find_specc                 C   s"   | |? |j tv rt|? d S d S ?N??__name__r   r   )r+   ?moduler   r   r   r   W   s   
?z_Finder.exec_modulec                 C   s   | |?}|j tv rt|? |S r-   r.   )r+   ?namer0   r   r   r   r   ]   s   
z_Finder.load_moduler-   )
r/   ?
__module__?__qualname__?__doc__r   r!   r   ?staticmethodr   r   r   r   r   r   r   )   s    
$
r   )?find_module)?ImpImporter?	ImpLoaderc                   @   s    e Zd Zddd?Zddd?ZdS )?_VirtualenvImporterNc                 C   s   t ?| ? t?| |? d S r-   )?object?__init__r7   )r   r   r   r   r   r;   k   s   
z_VirtualenvImporter.__init__c                 C   sD   |t v r zt|gt|?d?d |??R ? W S  ty   Y d S w d S )N?.?????)r   ?_VirtualenvLoaderr6   ?split?ImportError)r   r   r   r   r   r   r6   o   s   "?z_VirtualenvImporter.find_moduler-   )r/   r2   r3   r;   r6   r   r   r   r   r9   j   s    
r9   c                       s$   e Zd Zdd? Z? fdd?Z?  ZS )r>   c                 C   s    t ?| ? t?| ||||? d S r-   )r:   r;   r8   )r   r   ?file?filenameZetcr   r   r   r;   x   s   
z_VirtualenvLoader.__init__c                    s"   t t| ??|?}t|? d |_|S r-   )?superr>   r   r   ?
__loader__)r   r   r0   ??	__class__r   r   r   |   s   z_VirtualenvLoader.load_module)r/   r2   r3   r;   r   ?__classcell__r   r   rE   r   r>   w   s    r>   )r4   r   r	   r   ?join?__file__r   r   r   ?version_infor   ?	meta_path?insertZimpr6   Zpkgutilr7   r8   r:   r9   r>   r#   r   r   r   r   ?<module>   s    
;                                                # -*- coding: utf-8 -*-
"""Activate virtualenv for current interpreter:

Use exec(open(this_file).read(), {'__file__': this_file}).

This can be used when you must use an existing Python interpreter, not the virtualenv bin/python.
"""
import os
import site
import sys

try:
    abs_file = os.path.abspath(__file__)
except NameError:
    raise AssertionError("You must use exec(open(this_file).read(), {'__file__': this_file}))")

bin_dir = os.path.dirname(abs_file)
base = bin_dir[: -len("Scripts") - 1]  # strip away the bin part from the __file__, plus the path separator

# prepend bin to PATH (this file is inside the bin directory)
os.environ["PATH"] = os.pathsep.join([bin_dir] + os.environ.get("PATH", "").split(os.pathsep))
os.environ["VIRTUAL_ENV"] = base  # virtual env is right above bin directory

# add the virtual environments libraries to the host python import mechanism
prev_length = len(sys.path)
for lib in "..\Lib\site-packages".split(os.pathsep):
    path = os.path.realpath(os.path.join(bin_dir, lib))
    site.addsitedir(path.decode("utf-8") if "" else path)
sys.path[:] = sys.path[prev_length:] + sys.path[0:prev_length]

sys.real_prefix = sys.prefix
sys.prefix = base
                                                                                                                                                                                                                                                                                                                                                        ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ??                                          ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? 
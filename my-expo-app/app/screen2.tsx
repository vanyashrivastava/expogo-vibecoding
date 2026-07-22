import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

// ---------------------------------------------------------------------------
// THE NEON BUTCHER — late-night meat market homepage
// Dark base #0A0A0F, neon pink #FF3CAC as the "neon sign" primary,
// neon green #00FF88 reserved for freshness / in-stock signals.
// ---------------------------------------------------------------------------

const CATEGORIES = [
  { id: 'beef', label: 'Beef', icon: '🥩' },
  { id: 'pork', label: 'Pork', icon: '🥓' },
  { id: 'poultry', label: 'Poultry', icon: '🍗' },
  { id: 'lamb', label: 'Lamb', icon: '🍖' },
  { id: 'sausage', label: 'Sausage', icon: '🌭' },
  { id: 'deli', label: 'Deli', icon: '🧀' },
  { id: 'rubs', label: 'Rubs & Brines', icon: '🧂' },
  { id: 'charcoal', label: 'Fire & Fuel', icon: '🔥' },
];

const PRODUCTS = [
  { id: '1', name: 'Dry-Aged Ribeye', sub: '28-day age · bone-in', price: 24.99, unit: '/lb', icon: '🥩', tag: 'CUT TO ORDER', fresh: true },
  { id: '2', name: 'Heritage Pork Belly', sub: 'skin-on slab', price: 9.49, unit: '/lb', icon: '🥓', tag: null, fresh: true },
  { id: '3', name: 'House Bratwurst', sub: 'made this morning', price: 7.99, unit: '/lb', icon: '🌭', tag: 'SHOP MADE', fresh: true },
  { id: '4', name: 'Whole Free-Range Bird', sub: 'air-chilled, 4–5 lb', price: 4.29, unit: '/lb', icon: '🍗', tag: null, fresh: true },
  { id: '5', name: 'Lamb Shoulder Chops', sub: 'grass-fed, frenched', price: 13.99, unit: '/lb', icon: '🍖', tag: null, fresh: false },
  { id: '6', name: 'Smoked Beef Jerky', sub: 'peppered, small batch', price: 8.5, unit: '/bag', icon: '🍢', tag: 'SHOP MADE', fresh: true },
  { id: '7', name: 'Bone Broth Kit', sub: 'marrow + knuckle bones', price: 6.99, unit: '/pack', icon: '🍲', tag: null, fresh: true },
  { id: '8', name: 'Butcher\u2019s Rub No. 5', sub: 'coffee + chile + salt', price: 5.99, unit: '/tin', icon: '🧂', tag: null, fresh: true },
];

const SERVICES = [
  { id: 's1', icon: '🔪', title: 'Custom Cuts', body: 'Tell us the thickness. We cut while you wait.' },
  { id: 's2', icon: '📦', title: 'Freezer Packs', body: 'Bulk boxes built for the month, vacuum sealed.' },
  { id: 's3', icon: '🍳', title: 'Ask the Butcher', body: 'Cook times, temps, and what pairs with what.' },
];

export default function Screen2() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('beef');
  const [cartCount, setCartCount] = useState(0);

  const visibleProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ---------- Header ---------- */}
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>EST. 1987 · RICHMOND</Text>
            <Text style={styles.title}>
              THE NEON{'\n'}
              <Text style={styles.titleAccent}>BUTCHER</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => {}}
            activeOpacity={0.7}
          >
            <Text style={styles.cartIcon}>🛒</Text>
            {cartCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* ---------- Open status ---------- */}
        <View style={styles.statusRow}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>OPEN NOW · counter closes 7 PM</Text>
        </View>>

        {/* ---------- Search ---------- */}
        <View style={styles.searchWrap}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search cuts, sausage, rubs..."
            placeholderTextColor="#5A5A66"
            value={query}
            onChangeText={setQuery}
          />
        </View>

        {/* ---------- Cut of the Day ---------- */}
        <View style={styles.heroCard}>
          <View style={styles.heroTagRow}>
            <View style={styles.heroTag}>
              <Text style={styles.heroTagText}>CUT OF THE DAY</Text>
            </View>
            <Text style={styles.heroSavings}>SAVE 20%</Text>
          </View>
          <Text style={styles.heroEmoji}>🥩</Text>
          <Text style={styles.heroName}>Tomahawk Ribeye</Text>
          <Text style={styles.heroSub}>
            Two inches thick, long bone, dry-aged 28 days. One per customer,
            gone by noon.
          </Text>
          <View style={styles.heroFooter}>
            <Text style={styles.heroPrice}>
              $29.99<Text style={styles.heroUnit}> /lb</Text>
            </Text>
            <TouchableOpacity
              style={styles.heroButton}
              activeOpacity={0.8}
              onPress={() => setCartCount((c) => c + 1)}
            >
              <Text style={styles.heroButtonText}>RESERVE MINE</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ---------- Categories ---------- */}
        <Text style={styles.sectionTitle}>THE CASE</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
          {CATEGORIES.map((cat) => {
            const active = cat.id === activeCategory;
            return (
              <TouchableOpacity
                key={cat.id}
                style={[styles.categoryChip, active && styles.categoryChipActive]}
                onPress={() => setActiveCategory(cat.id)}
                activeOpacity={0.7}
              >
                <Text style={styles.categoryIcon}>{cat.icon}</Text>
                <Text
                  style={[
                    styles.categoryLabel,
                    active && styles.categoryLabelActive,
                  ]}
                >
                  {cat.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* ---------- Product grid ---------- */}
        <View style={styles.grid}>
          {visibleProducts.map((item) => (
            <View key={item.id} style={styles.card}>
              {item.tag && (
                <View style={styles.cardTag}>
                  <Text style={styles.cardTagText}>{item.tag}</Text>
                </View>
              )}
              <Text style={styles.cardEmoji}>{item.icon}</Text>
              <Text style={styles.cardName} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.cardSub} numberOfLines={1}>
                {item.sub}
              </Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardPrice}>
                  ${item.price.toFixed(2)}
                  <Text style={styles.cardUnit}>{item.unit}</Text>
                </Text>
                <TouchableOpacity
                  style={styles.addButton}
                  activeOpacity={0.7}
                  onPress={() => setCartCount((c) => c + 1)}
                >
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.freshRow}>
                <View
                  style={[
                    styles.freshDot,
                    !item.fresh && styles.freshDotOut,
                  ]}
                />
                <Text style={[styles.freshText, !item.fresh && styles.freshTextOut]}>
                  {item.fresh ? 'in the case today' : 'back Friday'}
                </Text>
              </View>
            </View>
          ))}
          {visibleProducts.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>🪓</Text>
              <Text style={styles.emptyText}>
                Nothing by that name in the case. Try "ribeye" or clear your
                search.
              </Text>
            </View>
          )}
        </View>

        {/* ---------- Services ---------- */}
        <Text style={styles.sectionTitle}>BEHIND THE COUNTER</Text>
        {SERVICES.map((s) => (
          <TouchableOpacity key={s.id} style={styles.serviceRow} activeOpacity={0.7}>
            <Text style={styles.serviceIcon}>{s.icon}</Text>
            <View style={styles.serviceTextWrap}>
              <Text style={styles.serviceTitle}>{s.title}</Text>
              <Text style={styles.serviceBody}>{s.body}</Text>
            </View>
            <Text style={styles.serviceChevron}>›</Text>
          </TouchableOpacity>
        ))}

        {/* ---------- Footer ---------- */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>COME SAY HI</Text>
          <Text style={styles.footerLine}>412 Cleaver St · Mon–Sat 8–7</Text>
          <Text style={styles.footerLine}>Call ahead for whole animals & holiday orders</Text>
          <TouchableOpacity style={styles.footerButton} activeOpacity={0.8}>
            <Text style={styles.footerButtonText}>📞 CALL THE SHOP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const PINK = '#FF3CAC';
const GREEN = '#00FF88';
const BG = '#0A0A0F';
const CARD = '#14141C';
const CARD_EDGE = '#23232F';
const TEXT = '#F2F2F7';
const MUTED = '#8A8A99';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BG,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 48,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  eyebrow: {
    color: MUTED,
    fontSize: 11,
    letterSpacing: 3,
    fontWeight: '600',
    marginBottom: 6,
  },
  title: {
    color: TEXT,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 1,
    lineHeight: 38,
  },
  titleAccent: {
    color: PINK,
    textShadowColor: PINK,
    textShadowRadius: 16,
    textShadowOffset: { width: 0, height: 0 },
  },
  cartButton: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: CARD_EDGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartIcon: {
    fontSize: 20,
  },
  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: PINK,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  cartBadgeText: {
    color: BG,
    fontSize: 11,
    fontWeight: '800',
  },

  // Status
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: GREEN,
    marginRight: 8,
    shadowColor: GREEN,
    shadowOpacity: 0.9,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
  },
  statusText: {
    color: GREEN,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },

  // Search
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: CARD_EDGE,
    paddingHorizontal: 14,
    marginTop: 20,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: TEXT,
    fontSize: 15,
    paddingVertical: 14,
  },

  // Hero
  heroCard: {
    marginTop: 20,
    backgroundColor: CARD,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: PINK,
    padding: 20,
    shadowColor: PINK,
    shadowOpacity: 0.35,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  heroTagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heroTag: {
    backgroundColor: PINK,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  heroTagText: {
    color: BG,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  heroSavings: {
    color: GREEN,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  heroEmoji: {
    fontSize: 56,
    marginTop: 14,
  },
  heroName: {
    color: TEXT,
    fontSize: 24,
    fontWeight: '800',
    marginTop: 8,
  },
  heroSub: {
    color: MUTED,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 6,
  },
  heroFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },
  heroPrice: {
    color: PINK,
    fontSize: 26,
    fontWeight: '900',
  },
  heroUnit: {
    color: MUTED,
    fontSize: 14,
    fontWeight: '600',
  },
  heroButton: {
    backgroundColor: PINK,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  heroButtonText: {
    color: BG,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
  },

  // Sections
  sectionTitle: {
    color: TEXT,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 3,
    marginTop: 30,
    marginBottom: 14,
  },

  // Categories
  categoryRow: {
    paddingRight: 8,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: CARD_EDGE,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginRight: 10,
  },
  categoryChipActive: {
    borderColor: PINK,
    backgroundColor: '#1F1420',
  },
  categoryIcon: {
    fontSize: 15,
    marginRight: 7,
  },
  categoryLabel: {
    color: MUTED,
    fontSize: 13,
    fontWeight: '700',
  },
  categoryLabelActive: {
    color: PINK,
  },

  // Product grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  card: {
    width: '48%',
    backgroundColor: CARD,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: CARD_EDGE,
    padding: 14,
    marginBottom: 14,
  },
  cardTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#0F2A1D',
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginBottom: 8,
  },
  cardTagText: {
    color: GREEN,
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },
  cardEmoji: {
    fontSize: 34,
    marginBottom: 8,
  },
  cardName: {
    color: TEXT,
    fontSize: 14,
    fontWeight: '800',
  },
  cardSub: {
    color: MUTED,
    fontSize: 11,
    marginTop: 3,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  cardPrice: {
    color: TEXT,
    fontSize: 15,
    fontWeight: '900',
  },
  cardUnit: {
    color: MUTED,
    fontSize: 11,
    fontWeight: '600',
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 9,
    backgroundColor: PINK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: BG,
    fontSize: 18,
    fontWeight: '900',
    marginTop: -2,
  },
  freshRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  freshDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: GREEN,
    marginRight: 6,
  },
  freshDotOut: {
    backgroundColor: '#55555F',
  },
  freshText: {
    color: GREEN,
    fontSize: 10,
    fontWeight: '600',
  },
  freshTextOut: {
    color: '#55555F',
  },
  emptyState: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 30,
  },
  emptyEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  emptyText: {
    color: MUTED,
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 19,
    paddingHorizontal: 20,
  },

  // Services
  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: CARD_EDGE,
    padding: 14,
    marginBottom: 10,
  },
  serviceIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  serviceTextWrap: {
    flex: 1,
  },
  serviceTitle: {
    color: TEXT,
    fontSize: 14,
    fontWeight: '800',
  },
  serviceBody: {
    color: MUTED,
    fontSize: 12,
    marginTop: 2,
    lineHeight: 17,
  },
  serviceChevron: {
    color: PINK,
    fontSize: 24,
    fontWeight: '300',
    marginLeft: 8,
  },

  // Footer
  footer: {
    marginTop: 28,
    backgroundColor: CARD,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: CARD_EDGE,
    padding: 20,
    alignItems: 'center',
  },
  footerTitle: {
    color: TEXT,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 3,
    marginBottom: 8,
  },
  footerLine: {
    color: MUTED,
    fontSize: 12,
    marginBottom: 4,
    textAlign: 'center',
  },
  footerButton: {
    marginTop: 12,
    borderWidth: 1.5,
    borderColor: GREEN,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 11,
  },
  footerButtonText: {
    color: GREEN,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
  },
});